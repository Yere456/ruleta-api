import mongoose from 'mongoose'

export async function connectToMongo () {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Conected to DB')
  } catch (error) {
    console.error(error)
  }
}
