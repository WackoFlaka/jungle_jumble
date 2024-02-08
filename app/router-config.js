import { JumbleController } from "./controllers/JumbleController.js";
import { gameController } from "./controllers/gameController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [JumbleController, gameController],
    view: ''
  }
])