const router = require("express").Router()
const orderController = require("@/controllers/order.controller")

router.route("/").get(orderController.index)
router.route("/").post(orderController.createOne)
router.route("/:id").get(orderController.getOne)
router.route("/:id").patch(orderController.updateOne)
router.route("/:id").delete(orderController.deleteOne)

module.exports = router