import { findPassengerByPclass, findPassengers } from "../controller/passengers.controller";
import { Router } from "express";
const router = Router()

router.get('/', findPassengers)
router.get('/:pclass', findPassengerByPclass)

export default router; 