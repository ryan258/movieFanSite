require('dotenv').config()

var express = require('express')
var router = express.Router()
const request = require('request')

const apiKey = process.env.API_KEY
const apiBaseUrl = 'http://api.themoviedb.org/3'
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300'

/* GET home page. */
router.get('/', function (req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    // console.log('==== The error ====')
    // console.log(error)
    // console.log('==== The response ====')
    // console.log(response) // where all the status codes, headers, etc are at
    // console.log('==== The movieData ====')
    // console.log(movieData) // it's just the body in string format
    const parsedData = JSON.parse(movieData) // we get a JS object that we can work with
    // console.log(parsedData)
    res.json(parsedData)
  })
})

module.exports = router
