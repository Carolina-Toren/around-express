const express = require('express');

const router = express.Router();
const { getAllUsers } = require('../controllers/users');

const { getUserById } = require('../controllers/users');

router.get('/', getAllUsers);

router.get('/:id', getUserById);

module.exports = router;
