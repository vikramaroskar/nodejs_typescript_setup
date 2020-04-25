//we can import because of typescript
import express, { Application, Request, Response, NextFunction } from "express";

const app: express.Application = express();

const func1 = (a: number, b: number) => a + b;

app.get("/", (req: Request, resp: Response) => {
  //this is typescript cheked for type
  //string here will not work now like normal JS
  console.log(func1(1, 2));

  resp.send("hello");
});

app.listen(5000, () => console.log("Server running..."));
