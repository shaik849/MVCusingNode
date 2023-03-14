const router = require('express').Router();

const postReq = require('../controller/form');

const getReq = require('../controller/get');

router.get('/', getReq);

router.post('/', postReq);




module.exports = router;