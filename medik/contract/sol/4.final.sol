// SPDX-License-Identifier: MIT
pragma solidity 0.8;

contract BetaLyf {
    address public admin;
    uint256 public orderCount;

    struct PharmacyOrder {
        uint256 id;
        address owner;
        uint256 amountPaid;
        bool isCompleted;
        bool isDelivered;
    }

    struct Booking {
        uint256 id;
        address patient;
        address doctor;
        uint256 time;
        bool isConfirmed;
    }
    mapping(string => PharmacyOrder) public orders;
    mapping(address => string[]) public ownerOrders;
    // Bookings
    uint256 public bookingCount;
    mapping(uint256 => Booking) public bookings;
    mapping(address => uint256[]) public doctorBookings;
    mapping(address => uint256[]) public patientBookings;

    event OrderAdded(
        uint256 id,
        string orderId,
        address owner,
        uint256 amountPaid
    );
    event OrderCompleted(string orderId);
    event OrderDelivered(string orderId);
    // Bookings
    event BookingCreated(
        uint256 id,
        address patient,
        address doctor,
        uint256 time
    );
    event BookingConfirmed(uint256 id, address doctor);

    modifier onlyDoctor(uint256 bookingId) {
        require(
            bookings[bookingId].doctor == msg.sender,
            "Only the assigned doctor can perform this action"
        );
        _;
    }
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyOwner(string memory orderId) {
        require(
            orders[orderId].owner == msg.sender,
            "Only owner can perform this action"
        );
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addOrder(string memory orderId, uint256 amountPaid) public {
        require(orders[orderId].owner == address(0), "Order already exists");

        orderCount++;
        orders[orderId] = PharmacyOrder(
            orderCount,
            msg.sender,
            amountPaid,
            false,
            false
        );
        ownerOrders[msg.sender].push(orderId);

        emit OrderAdded(orderCount, orderId, msg.sender, amountPaid);
    }

    function markOrderAsCompleted(string memory orderId) public onlyAdmin {
        require(orders[orderId].owner != address(0), "Order does not exist");
        require(!orders[orderId].isCompleted, "Order already completed");

        orders[orderId].isCompleted = true;

        emit OrderCompleted(orderId);
    }

    function markOrderAsDelivered(string memory orderId) public onlyAdmin {
        require(orders[orderId].owner != address(0), "Order does not exist");
        require(orders[orderId].isCompleted, "Order must be completed first");
        require(!orders[orderId].isDelivered, "Order already delivered");

        orders[orderId].isDelivered = true;

        emit OrderDelivered(orderId);
    }

    function getOrder(string memory orderId)
        public
        view
        returns (PharmacyOrder memory)
    {
        require(orders[orderId].owner != address(0), "Order does not exist");
        return orders[orderId];
    }

    function getOwnerOrders(address owner)
        public
        view
        returns (string[] memory)
    {
        return ownerOrders[owner];
    }

    // Bookings

    function createBooking(address doctor, uint256 time) public {
        bookingCount++;
        bookings[bookingCount] = Booking(
            bookingCount,
            msg.sender,
            doctor,
            time,
            false
        );
        patientBookings[msg.sender].push(bookingCount);
        doctorBookings[doctor].push(bookingCount);

        emit BookingCreated(bookingCount, msg.sender, doctor, time);
    }

    function confirmBooking(uint256 bookingId) public onlyDoctor(bookingId) {
        require(bookings[bookingId].id != 0, "Booking does not exist");
        require(!bookings[bookingId].isConfirmed, "Booking already confirmed");

        bookings[bookingId].isConfirmed = true;

        emit BookingConfirmed(bookingId, msg.sender);
    }

    function getBooking(uint256 bookingId)
        public
        view
        returns (Booking memory)
    {
        require(bookings[bookingId].id != 0, "Booking does not exist");
        return bookings[bookingId];
    }

    function getDoctorBookings(address doctor)
        public
        view
        returns (uint256[] memory)
    {
        return doctorBookings[doctor];
    }

    function getPatientBookings(address patient)
        public
        view
        returns (uint256[] memory)
    {
        return patientBookings[patient];
    }

    function changeAdmin(address newAdmin) public onlyAdmin {
        require(newAdmin != address(0), "Invalid address for new admin");
        admin = newAdmin;
    }
}
