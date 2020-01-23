const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const cors = require('cors')
const morgan = require('morgan')

require('dotenv').config()

const baseUrl = 'https://www.universe.com'

const app = express()
const port = 4000

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/graphql', (req, res, next) => {
    const options = {
        json: true,
        body: req.body,
        headers: {
            authorization: `Bearer ${process.env.TOKEN}`
        }
    }
    request.post(`${baseUrl}/graphql`, options, (err, graphResp, body) => {
        if (err) next(err)
        else res.status(graphResp.statusCode).send(body)
    })
})

app.use(function (err, req, res, next) {
    console.error(err)
    res.status(500).send('Something broke, look to the our server logs!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
