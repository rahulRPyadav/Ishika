const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings, updateBookingStatus } = require('../controllers/bookingController');

router.post('/', createBooking);
router.get('/', getAllBookings); // Admin Route
router.put('/:id/status', updateBookingStatus);

module.exports = router;