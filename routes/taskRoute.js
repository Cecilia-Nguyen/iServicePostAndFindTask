const controller = require('../controller/manageTask');

const express = require('express');
const router = express.Router();
router.get('/gettask', controller.getTask);
router.post('/posttask', controller.postTask);
module.exports = router;
