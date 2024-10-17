import express, { json, Router, urlencoded } from "express";
import productRoute from "./routes/products/index";
const port = 3000;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", productRoute);
app.listen(port, () => {
  console.log("app listening on port :", port);
});
