import Player from '../models/player.model.js'

export async function createPlayers (req, res) {
  try {
    const players = await Player.insertMany(req.body)

    return res.status(200).send(players)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
}

export async function getPlayers (req, res) {
  try {
    const players = await Player.find()

    return res.status(200).send(players)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
}
