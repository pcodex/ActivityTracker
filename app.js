const express = require('express')
const bodyParser = require('body-parser')

const handlers = require('./libs/handlers')

const app = express()

const portnum = process.env.PORT||2000

app.use(bodyParser.urlencoded({extended:true}))


const exphandlebars = require('express-handlebars').create({defaultLayout:'main'})
app.engine('handlebars', exphandlebars.engine)
app.set('view engine', 'handlebars')

//app.set(express.static(__dirname +'/public'))


app.get('/', (req,res) => {
    res.render('home', {author : 'Prabhu'})
})

app.post('/submitActivity', handlers.saveActivity)

app.get('/activitySubmitted', handlers.endActivity)

app.listen(portnum, () => {
    console.log('Server is listening')
})