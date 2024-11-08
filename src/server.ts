import express, { Express, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./models";
import handleUserRoutes from "./routes/user.route";


dotenv.config();
const corsOptions = { credentials: true, origin: true };

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors(corsOptions));

db.sequelize.sync({ force: true}).then(()=>{
  console.log("synced db")
}).catch(()=>{
  console.log(`Failed to sync db: ${Error}`)
})

app.use('/api/user', handleUserRoutes())



app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not Found");
  res.status(404);
  next(error);
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  res.json({
    error: {
      message: error.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
    },
  });
});






app.listen(port, () => {
  console.log(`[server]: Server is running at my http://localhost:${port}`);
});

