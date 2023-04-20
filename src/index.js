require('dotenv').config()
import app from './app'
import "./database"

const port = process.env.PORT
app.listen(port, console.log('conectado al puerto ', port))
console.log('sigue funcionando')

