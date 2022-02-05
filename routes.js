const express = require("express")

const Post = require("./models/Post")

const router = express.Router()


router.get("/getallposts", async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
})

router.post("/createpost", async (req, res) => {

    const postExist = await Post.findOne({title: req.body.title})

    if (postExist) {
        return res.json({
            message: 'Error!',
            response: 'Post already exist'
        })

    } else {

        const post = new Post({
            title: req.body.title,
            content: req.body.content,
        })
        await post.save()
        res.send(post)
    }
})

router.get("/getpost/:id", async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        res.send(post)
    } catch {
        res.status(404)
        res.send({error: "post does not exist!"})
    }
})

router.patch("/updatepost/:id", async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        if (req.body.title) {
            post.title = req.body.title
        }
        if (req.body.content) {
            post.content = req.body.content
        }
            await post.save()
            res.send(post)
        } catch {
            res.status(404)
            res.send({error: "Post dose not exist! "})
        }
})

router.delete("/deletepost/:id", async (req, res) => {
    try {
        const deletePost = await Post.findOneAndDelete({_id: req.params.id})
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Post does not exist! "})
    }
})

router.get("/", async (req, res) => {

    res.send("Page not found")
})



module.exports = router
