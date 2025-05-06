import express from 'express'
import signUpController from '../controllers/auth/signUpController.js'

const router = express.Router()

router.post('/signup', signUpController)

export default router