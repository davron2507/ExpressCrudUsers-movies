import express from 'express'
import bodyParser from 'body-parser'
const app = express()
import movieRouter from './routes/movie.route.js'
import userRouter from './routes/user.route.js'


//Middlewares
// app.use(express.json())
app.use(bodyParser.json())



app.use("/api/v1/movies", movieRouter)
app.use('/api/v1/users', userRouter)

app.use((err, req, res, next) => {
  console.log(process.env.NODE_ENV);
  let isDev = process.env.NODE_ENV === "DEVELOPMENT";
  // res.status(404).send(`Error texti : ${err.message}`);
  res.status(404).json({
    status: "Failed",
    message: err.message,
    ...(isDev && { stack: err.stack }),
  });
});

export default app


















