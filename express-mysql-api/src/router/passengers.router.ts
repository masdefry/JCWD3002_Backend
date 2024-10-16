import { findPassengers } from "../controller/passengers.controller";
import { Router } from "express";
const router = Router()

router.get('/', findPassengers)

export default router; 