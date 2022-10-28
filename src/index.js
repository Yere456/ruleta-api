import app from './app.js'
import { connectToMongo } from './utils/mongo.js'

(async () => {
  app.listen(process.env.PORT || 3000)
  await connectToMongo()
  console.log('corriendo')
})()
