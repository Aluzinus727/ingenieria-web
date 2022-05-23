import express from "express"

import usersRouter from './routes/users'
import authRouter from './routes/auth'

const app = express()

// Middlewares
app.use(express.json())

// CORS
app.use(function(_req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Routes
app.use('/api/auth', authRouter)

app.use('/api/users', usersRouter)



// Running server
app.listen(3000, () => {
    console.log("Server running")
})