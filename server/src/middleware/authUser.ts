import { Request, Response, NextFunction } from 'express';

export function authenticateUser(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    // User is not authenticated, respond with a 401 Unauthorized status
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // User is authenticated, proceed to the next middleware or route handler
  next();
}