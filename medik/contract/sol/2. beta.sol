// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Payment {
    address payable seller;
    address buyer;
    uint256 amount;
    bool isPaid;
    bool isDelivered;
}

contract BetaLyf {
    address public admin;

    constructor(address _admin) {
        admin = _admin;
    }

    mapping(uint256 => Payment) public payments;
    uint256 public paymentCounter;

    event PaymentMade(
        uint256 indexed paymentId,
        address indexed buyer,
        uint256 amount
    );
    event DeliveryConfirmed(
        uint256 indexed paymentId,
        address indexed seller,
        uint256 amount
    );
    event RefundIssued(
        uint256 indexed paymentId,
        address indexed buyer,
        uint256 amount
    );

    modifier onlyBuyer(uint256 _paymentId) {
        require(
            msg.sender == payments[_paymentId].buyer,
            "Only buyer can call this function."
        );
        _;
    }

    modifier onlySeller(uint256 _paymentId) {
        require(
            msg.sender == payments[_paymentId].seller,
            "Only seller can call this function."
        );
        _;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "only admin can call this");
        _;
    }

    function createPayment(address payable _seller) external payable {
        require(msg.value > 0, "Payment amount must be greater than zero.");

        paymentCounter++;
        payments[paymentCounter] = Payment({
            seller: _seller,
            buyer: msg.sender,
            amount: msg.value,
            isPaid: true,
            isDelivered: false
        });

        emit PaymentMade(paymentCounter, msg.sender, msg.value);
    }

    function confirmDelivery(uint256 _paymentId)
        external
        onlySeller(_paymentId)
    {
        require(payments[_paymentId].isPaid, "Payment has not been made.");
        require(
            !payments[_paymentId].isDelivered,
            "Delivery has already been confirmed."
        );

        payments[_paymentId].isDelivered = true;
        payments[_paymentId].seller.transfer(payments[_paymentId].amount);

        emit DeliveryConfirmed(
            _paymentId,
            msg.sender,
            payments[_paymentId].amount
        );

        // Clean up
        delete payments[_paymentId];
    }

    function refundBuyer(uint256 _paymentId) external onlyAdmin {
        require(payments[_paymentId].isPaid, "Payment has not been made.");
        require(
            !payments[_paymentId].isDelivered,
            "Delivery has been confirmed."
        );

        payable(payments[_paymentId].buyer).transfer(
            payments[_paymentId].amount
        );
        emit RefundIssued(
            _paymentId,
            payments[_paymentId].buyer,
            payments[_paymentId].amount
        );

        // Clean up
        delete payments[_paymentId];
    }

    function changeAdmin(address _newAdmin) external onlyAdmin {
        admin = _newAdmin;
    }
}
