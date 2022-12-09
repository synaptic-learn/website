import { Router } from "express";

import lessons_router from "./lessons";

const api_router = Router();

api_router.use("/lessons", lessons_router);

export default api_router;
