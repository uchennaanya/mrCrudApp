const router = require("express").Router()

const controller = require('../controllers/postController')

router.get("/getallposts", controller.getAllPosts)
router.post("/createpost", controller.createPost)
router.patch("/updatepost/:id", controller.updatePost)
router.delete("/deletepost/:id", controller.deletePost)
// router.post("/login/:id", controller.login)

module.exports = router
