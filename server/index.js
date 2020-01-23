const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const cors = require('cors')

const URL = 'https://www.universe.com/graphql'

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/graphql', (req, res, next) => {
    const options = {
        json: true,
        body: req.body,
    }
    request.post(URL, options, (err, graphResp, body) => {
        if (err) {
            console.log(err)
            next(err)
        } else {
            res.status(graphResp.statusCode)
            res.send(body)
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
