import { AppState } from "../AppState.js";

export class gameService {
    submitGame(form) {
        
        if(form.body == AppState.activeJumble.body) {
            console.log("Winner")
        } else {
            console.log("LOSER")
        }
    }
}

export const gameServices = new gameService()