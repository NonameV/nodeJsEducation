const {Router} = require('express')

const router = Router()

router.get('/add-course', (req, res) => {
    res.render('add-course', {
        title: 'Добавить курс',
        isAddCourse: true
   })
})

router.post('/add-course', (req, res) => {
    console.log(req.body)

    res.redirect('/courses')
})

module.exports = router