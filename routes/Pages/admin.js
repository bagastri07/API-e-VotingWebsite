const express = require('express')
const router = express.Router()
const db = require('../../conn')
const passport = require('passport')

const initializePassport = require('../../controller/auth-admin-passport-config')
initializePassport(passport)

router.get('/', (req, res) => {
    res.render('login-admin')
})

router.post('/auth/login', passport.authenticate('local', {
    successRedirect: '/adm/dasboard',
    failureRedirect: '/adm',
    failureFlash: true
}))

router.get('/dasboard', (req, res) => {
    res.send('ok')
})


module.exports = router