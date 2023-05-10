import express from "express";
//import studentsRoutes from "./routes/students.routes.js";
import testRoutes from "./routes/test.routes.js";

// npm run dev
const app = express();

app.use(express.json());

const api = "/api";

app.use(api, testRoutes);
//app.use(api, studentsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "URL not found." });
});

export default app;