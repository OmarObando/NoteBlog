import express from "express";

import testRoutes from "./routes/test.routes.js";
import accessRoutes from "./routes/access.routes.js";
import notebookRoutes from "./routes/notebook.routes.js";
import cors from "cors";
// npm run dev
const app = express();

app.use(express.json());

const api = "/api";

app.use(api, testRoutes);
app.use(api, accessRoutes);
app.use(api, notebookRoutes);
app.use(cors({origin: 'http://localhost:8000'}));
app.use((req, res, next) => {
  res.status(404).json({ message: "URL not found." });
});

export default app;