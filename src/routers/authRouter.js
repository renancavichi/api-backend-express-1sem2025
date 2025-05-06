import express from 'express'
import signUpController from '../controllers/auth/signUpController.js'
import loginController from '../controllers/auth/loginController.js'

const router = express.Router()

router.post('/signup', signUpController)
router.post('/login', loginController)

export default router