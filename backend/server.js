import express from 'express';
import cors from 'cors';
import router from "./router/router.js";
import {connectDB} from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"))
app.use("/", router);
connectDB()

app.listen(3000, () => {
    console.log("Server started on port 3000");
})