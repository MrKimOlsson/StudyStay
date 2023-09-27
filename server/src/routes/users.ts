import express from "express";
import * as UserController from "../controllers/user/users";
import { requiresAuth } from "../middleware/auth";
import { Router } from 'express';
import { authenticateUser } from '../middleware/authUser';

const router = express.Router();

router.get("/", requiresAuth, UserController.getAuthenticatedUser);

router.post("/signup", UserController.signUp);

router.post("/login",  UserController.login);

router.post("/logout", UserController.logout);

export default router;