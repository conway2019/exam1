const url = "http://johnyu.cn:3000/albums"
const app = require("./spider")
const mongoose = require("mongoose")
require("./model")
let albumkDao = require("./dao/AlbumDao")

app.spider(url, function (data) {
    // console.log(data)
    data.forEach(function (album) {
            //console.log(album)
            albumkDao.addAlbum(album, function (newAlbum) {
                console.log('插入' + newAlbum.id)
            })
        }
    )
})

