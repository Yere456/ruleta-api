import mongoose from 'mongoose'

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  puntos: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

export default mongoose.model('Players', playerSchema)
