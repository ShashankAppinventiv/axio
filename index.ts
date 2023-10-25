import express, { Express } from "express"
import { checkRouter } from "./src/routers/routes";
class App {
  private app!: Express;
  private port!: number;
  constructor() {
    this.startApp();
  }
  startApp() {
    this.app = express();
    this.loadGlobalMiddleWare();
    this.loadRouter();
    this.initServer();
  }
  loadGlobalMiddleWare() {
    this.app.use(express.json());
    this.port = 3001;
}
  loadRouter() {
    this.app.use('/axiosCheck',checkRouter.userRouter())
  }
  initServer() {
    this.app.listen(this.port, this.callback);
  }
  private callback = () => {
    console.log(`Server listing on port: ${this.port}`);
  };
}
(async () => {
  new App();
})();