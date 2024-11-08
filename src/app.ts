import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "ph health care server" });
});

app.get("/error", (req, res) => {
  throw new Error("This is a forced erro");
});

app.use((err: any, req: Request, res: Response) => {
  console.log(err);
  res.status(400).json({
    message: err.message,
  });
});
app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

export default app;
