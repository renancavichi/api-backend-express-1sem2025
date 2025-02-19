import express from 'express'
import getUserController from '../controllers/user/getUserController.js'
import createUserController from '../controllers/user/createUserController.js'
import updateUserController from '../controllers/user/updateUserController.js'
import deleteUserController from '../controllers/user/deleteUserController.js'
import editNameUserController from '../controllers/user/editNameUserController.js'

const router = express.Router()

router.get('/', getUserController)
router.post('/', createUserController)
router.put('/', updateUserController)
router.delete('/', deleteUserController)
router.patch('/', editNameUserController)

export default router