const router = require("express").Router()
const orderController = require("@/controllers/order.controller")
const auth = require("@/middlewares/auth.middleware")

router.route("/").get(orderController.index)
router.route("/get_all").get(orderController.getAll)

router.route("/buy_ne").post(auth, orderController.buyOne)
router.route("/buy_from_cart").post(auth, orderController.buyFromCart)

// router.route("/").post(orderController.createOne)
router.route("/:id").get(orderController.getOne)
router.route("/:id").patch(orderController.updateOne)
router.route("/:id").delete(orderController.deleteOne)

module.exports = router