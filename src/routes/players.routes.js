import { Router } from 'express'
import { createPlayers, getPlayers } from '../controllers/players.controller.js'

const router = Router()

router.post('/', createPlayers)
router.get('/', getPlayers)

export default router
