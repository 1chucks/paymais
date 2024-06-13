// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract BetaLyf {
    struct Payment {
        address payable seller;
        address buyer;
        uint amount;
        bool isPaid;
        bool isDelivered;
    }

    IERC20 public token;
    mapping(uint => Payment) public payments;
    uint public paymentCounter;

    // Events
    event PaymentMade(uint indexed paymentId, address indexed buyer, uint amount);
    event DeliveryConfirmed(uint indexed paymentId, address indexed seller, uint amount);
    event RefundIssued(uint indexed paymentId, address indexed buyer, uint amount);

    // Modifier to ensure only buyer can call specific functions
    modifier onlyBuyer(uint _paymentId) {
        require(msg.sender == payments[_paymentId].buyer, "Only buyer can call this function.");
        _;
    }

    // Modifier to ensure only seller can call specific functions
    modifier onlySeller(uint _paymentId) {
        require(msg.sender == payments[_paymentId].seller, "Only seller can call this function.");
        _;
    }

    // Constructor to set the ERC-20 token address
    constructor(IERC20 _token) {
        token = _token;
    }

    // Function for buyer to create a new payment
    function createPayment(address payable _seller, uint _amount) external {
        require(_amount > 0, "Payment amount must be greater than zero.");
        require(token.transferFrom(msg.sender, address(this), _amount), "Token transfer failed.");

        paymentCounter++;
        payments[paymentCounter] = Payment({
            seller: _seller,
            buyer: msg.sender,
            amount: _amount,
            isPaid: true,
            isDelivered: false
        });

        emit PaymentMade(paymentCounter, msg.sender, _amount);
    }

    // Function for seller to confirm delivery
    function confirmDelivery(uint _paymentId) external onlySeller(_paymentId) {
        require(payments[_paymentId].isPaid, "Payment has not been made.");
        require(!payments[_paymentId].isDelivered, "Delivery has already been confirmed.");

        payments[_paymentId].isDelivered = true;
        require(token.transfer(payments[_paymentId].seller, payments[_paymentId].amount), "Token transfer failed.");

        emit DeliveryConfirmed(_paymentId, msg.sender, payments[_paymentId].amount);

        // Clean up
        delete payments[_paymentId];
    }

    // Function to allow buyer to withdraw payment if delivery is not confirmed
    function refundBuyer(uint _paymentId) external onlyBuyer(_paymentId) {
        require(payments[_paymentId].isPaid, "Payment has not been made.");
        require(!payments[_paymentId].isDelivered, "Delivery has been confirmed.");

        require(token.transfer(payable(payments[_paymentId].buyer), payments[_paymentId].amount), "Token transfer failed.");
        emit RefundIssued(_paymentId, payments[_paymentId].buyer, payments[_paymentId].amount);

        // Clean up
        delete payments[_paymentId];
    }
}
