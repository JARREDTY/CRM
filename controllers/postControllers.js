const { DataTypes } = require('sequelize')
const {sequelize} = require('../models')
const {ipcMain} = require('electron')


const newPost = ()=>{
    ipcMain.on('new-post', async(event, data) =>{
        const Post = require('../models/post')(sequelize, DataTypes)
        const name = data.name
        const posts = data.posts
        try{
            Post.create({name, posts})
        }
        catch(err){
            console.log(err)
        }



    })
}

module.exports = {newPost}