const express = require('express')
const {addOrderItem,getOrderById,updateOrderToPaid} = require('../controllers/orderControl')
const {protect} = require('../middlewares/authMiddleware')
const router=express.Router();

router.post('/order',protect,addOrderItem)
router.post('/order/:id',protect,getOrderById)
router.put('/order/:id/pay',protect,updateOrderToPaid)


module.exports=router;