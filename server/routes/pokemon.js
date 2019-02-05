const express = require('express');
const router = express.Router();

const Pokemon = require('../models/pokemon');

router.route('/')
  .get((req, res) => {
    Pokemon.find({})
      .then(res.data)
      .catch(res.error)
  })
  .post((req, res) => {
    Pokemon.create(req.body)
      .then(res.data)
      .catch(res.error)
  })

router.route('/:id')
  .get((req, res) => {
    Pokemon.findOne(req.params.id)
      .then(res.data)
      .catch(res.error)
  })
  .delete((req, res) => {
    Pokemon.findByIdAndRemove(req.params.id)
      .then(() => res.send())
      .catch(res.error)
  })
  .put((req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then(res.data)
      .catch(res.error)
  })

module.exports = router;
