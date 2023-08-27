import cors from "cors"
import cookieParser from "cookie-parser"
import express, { Request, Response } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { notFound, errorHandler } from "./middleware/errorMiddleware"
// import seedRouter from "./routes/seed"
// import productsRouter from "./routes/product"
// import userRouter from "./routes/user"

dotenv.config()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI as string
const origin = "http://localhost:3000" || ""

const app = express()
app.use(cors({ credentials: true, origin }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!")
})

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server Running on PORT: http://localhost:${PORT}!`)
    )
  })
  .catch((err) => {
    console.log(err.message)
  })
