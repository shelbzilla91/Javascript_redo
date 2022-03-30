const express = require ('express')
const router = express.Router()
const {getRecords, setRecords, updateRecords, deleteRecords}= require ('../controllers/goalController')

router.route('/').get(getRecords).post (setRecords)


router.route('/:id').delete(deleteRecords).put(updateRecords)


module.exports = router;