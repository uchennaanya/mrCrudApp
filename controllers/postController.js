const Post = require("../models/Post")

require("dotenv").config()

const getAllPosts = async (req, res) => {
    try {
        const allPost = await Post.find({})
    res.status(201).json({
        msg: "Success",
        data: allPost
    })
    } catch {
        res.status(400).json({
            msg: "Failed"
        })
    }
}

const createPost = async (req, res) => {
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
    }

    const updatePost = async (req, res) => {
    try {
        const {title, content } = req.body

        const post = await Post.findByIdAndUpdate({ _id: req.params.id }, { title, content }, { new: true })

            return res.status(200).json({
                msg: "Success",
                data: post
            })
        } catch {
            res.status(404)
            res.send({error: "Post dose not exist! "})
        }
    }

   const deletePost = async (req, res) => {
        try {
            await Post.findOneAndDelete({_id: req.params.id})
            return res.status(204).json({
                msg: "Success",
                data: ` Post with ${_id} deleted sucessfully `
            })
        } catch {
            res.status(404)
            res.send({ error: "Post does not exist! "})
        }
    }

    module.exports = { createPost, updatePost, deletePost, getAllPosts }
