const express = require('express')
const app = express()
const userMongoRoutes = require('./server/routes/user.mongo.routes')
const connectDB=require('./server/config/db')
app.use(express.json())

app.use('/api', userMongoRoutes)

connectDB()

const port =  3001;
const host =  'localhost';
app.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});