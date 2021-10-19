const controller = require('../controller/manageTask');

const express = require('express');
const router = express.Router();
router.get('/gettask', controller.getTask);
router.post('/posttask', controller.postTask);
router.get('/deletetask', controller.deleteTask);
router.get('/gettask/:id', controller.getTask);
router.get('/deletetask/:id', controller.deleteTask);
module.exports = router;
