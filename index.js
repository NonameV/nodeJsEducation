const express = require('express')
const exphbs = require('express-handlebars')
const homeRouts = require('./routes/home')
const coursesRouts = require('./routes/courses')
const addCourseRouts = require('./routes/add-course')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public')) // создаем статическую папкугде храним стили
app.use(homeRouts)
app.use(coursesRouts)
app.use(addCourseRouts)








const PORT = process.env.PORT ||3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})