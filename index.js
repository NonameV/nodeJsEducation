const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public')) // создаем статическую папкугде храним стили


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/courses', (req, res) => {
    res.render('courses')
})

app.get('/add-course', (req, res) => {
    res.render('add-course')
})




const PORT = process.env.PORT ||3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})