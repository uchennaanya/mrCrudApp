const Post = require("../models/Post")

require("dotenv").config()

const getAllPosts = async (req, res) => {
    try {
        const allPost = await Post.find({})
    res.status(201).json({
        msg: "Success",
        data: allPost
    })
    } catch(err) {
        res.status(400).json({
            error: err.message
        })
    }
}

const createPost = async (req, res) => {
    try{
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
    } catch(err) {
        res.status(404)
        res.send({error: err.message})
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
        } catch(err) {
            res.status(404)
            res.send({error: err.message})
        }
    }

   const deletePost = async (req, res) => {
        try {

            const dlete = await Post.findOneAndDelete({_id: req.params.id})

                dlete && res.status(204).json({
                    msg: "Success",
                    data: `Post with ${dlete._id} deleted sucessfully`
                })
            } catch (err) {
                res.status(404)
                res.send({ error: err.message})
            }
        }

    module.exports = { createPost, updatePost, deletePost, getAllPosts }
