import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";

declare module 'express-session' {
    export interface SessionData {
        userId: mongoose.Types.ObjectId;
    }
  }

export const requiresAuth: RequestHandler = (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        next(createHttpError(401, "User not authenticated"));
    }
};