import mongoose from 'mongoose'

export async function connectToMongo () {
  try {
    await mongoose.connect('mongodb+srv://yeremy:yeremy@ruleta.o1g0ypf.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conected to DB')
  } catch (error) {
    console.error(error)
  }
}
