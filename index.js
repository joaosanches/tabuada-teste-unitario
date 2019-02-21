const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

// CONTROLLERS
const indexRouter = require( './routes/index')
const tabuadaRouter = require('./routes/tabuada')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// pasta publia de arquivos estáticos
app.use('/', indexRouter)
app.use('/tabuadas', tabuadaRouter)

app.use(express.static('public'))

app.listen(port, () => {
    console.log('tabuada server on port: ' + port) 
})