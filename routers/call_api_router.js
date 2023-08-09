const router = require("express").Router();
const {videc} = require('../controllers/call_api')

router.get('/getlistuser',videc.getListUser)
router.post('/updateuser',videc.postStatusUser)

module.exports = router;