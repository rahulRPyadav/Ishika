const express = require('express');
const router = express.Router();
const { createTour, getTours, getTourBySlug, deleteTour } = require('../controllers/tourController');

router.post('/', createTour);
router.get('/', getTours);
router.get('/:slug', getTourBySlug);
router.delete('/:id', deleteTour);

module.exports = router;