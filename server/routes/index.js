const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userBasketDeviceRouter = require('./userBasketDeviceRouter')
const ratingRouter = require('./ratingRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/basket', userBasketDeviceRouter)
router.use('/rating', ratingRouter)

module.exports = router