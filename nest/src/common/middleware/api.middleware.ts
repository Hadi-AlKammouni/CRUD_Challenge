import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class ApiMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        const token = req.body.token || req.headers["x-access-token"]

        if (!token) {
            throw new BadRequestException ('Unauthorized.')
        }

        next()
        
    }
}