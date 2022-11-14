import { Router } from "express";
import { healthCheck } from "../components/healthCheck.controller";

const router = Router();

router.get('/', healthCheck);

export default router;