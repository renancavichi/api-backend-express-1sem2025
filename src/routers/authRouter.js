import express from 'express'
import signUpController from '../controllers/auth/signUpController.js'
import loginController from '../controllers/auth/loginController.js'
import logoutController from '../controllers/auth/logoutController.js'

const router = express.Router()

router.post('/signup', signUpController)
router.post('/login', loginController)
router.delete('/logout', logoutController)

export default router