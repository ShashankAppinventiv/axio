import { Router } from "express";
import { checkController } from "../controller/contoller";
class CheckRouter {
  private router!: Router;
  constructor() {
    this.router = Router();
  }
  userRouter() {
    this.router.get("/check",checkController.checkAxiosCall);
    return this.router;
  }
}
export const checkRouter = new CheckRouter();
