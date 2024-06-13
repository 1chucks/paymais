// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BetaLyf {
    struct Payment {
        address payable seller;
        address buyer;
        uint amount;
        bool isPaid;
        bool isDelivered;
    }

    mapping(uint => Payment) public payments;
    uint public paymentCounter;

    event PaymentMade(uint indexed paymentId, address indexed buyer, uint amount);
    event DeliveryConfirmed(uint indexed paymentId, address indexed seller);
    event PaymentReleased(uint indexed paymentId, address indexed seller, uint amount);
    event RefundIssued(uint indexed paymentId, address indexed buyer, uint amount);

    modifier onlyBuyer(uint _paymentId) {
        require(msg.sender == payments[_paymentId].buyer, "Only buyer can call this function.");
        _;
    }

    modifier onlySeller(uint _paymentId) {
        require(msg.sender == payments[_paymentId].seller, "Only seller can call this function.");
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


    function confirmDelivery(uint _paymentId) external onlySeller(_paymentId) {
        require(payments[_paymentId].isPaid, "Payment has not been made.");
        require(!payments[_paymentId].isDelivered, "Delivery has already been confirmed.");

        payments[_paymentId].isDelivered = true;
        emit DeliveryConfirmed(_paymentId, msg.sender);
    }

    function releasePayment(uint _paymentId) external onlyBuyer(_paymentId) {
        require(payments[_paymentId].isPaid, "Payment has not been made.");
        require(payments[_paymentId].isDelivered, "Delivery has not been confirmed.");

        payments[_paymentId].seller.transfer(payments[_paymentId].amount);
        emit PaymentReleased(_paymentId, payments[_paymentId].seller, payments[_paymentId].amount);

        delete payments[_paymentId];
    }

    function refundBuyer(uint _paymentId) external onlyBuyer(_paymentId) {
        require(payments[_paymentId].isPaid, "Payment has not been made.");
        require(!payments[_paymentId].isDelivered, "Delivery has been confirmed.");

        payable(payments[_paymentId].buyer).transfer(payments[_paymentId].amount);
        emit RefundIssued(_paymentId, payments[_paymentId].buyer, payments[_paymentId].amount);

        // Clean up
        delete payments[_paymentId];
    }
}
