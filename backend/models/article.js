const mongoose = require('mongoose')

const Article = mongoose.model('Article' , {

    title:{
        type: String
    },
    idAuthor: {
        type: String
    },
    descripcion: {
        type: String
    },
    date: {
        type: String
    },
    contenido: {
        type: String
    },
    imagen: {
        type: String
    },
    tags: {
        type: Array
    }




})

module.exports = Article;