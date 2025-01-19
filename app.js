const express = require('express')

const app = express()

const portnum = process.env.PORT||2000

const exphandlebars = require('express-handlebars').create({defaultLayout:'main'})
app.engine('handlebars', exphandlebars.engine)
app.set('view engine', 'handlebars')

//app.set(express.static(__dirname +'/public'))


app.get('/', (req,res) => {
    res.render('home', {author : 'Prabhu'})
})

app.listen(portnum, () => {
    console.log('Server is running')
})