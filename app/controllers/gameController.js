import { AppState } from "../AppState.js";
import { gameServices } from "../services/gameServices.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class gameController {
    constructor() {
        console.log("game controller is on!")
    }
    
    userInput() {
        console.log("We have recieved input!")
    }
    
    submitGame() {
        try {
            event.preventDefault()
            const form = event.target
            const submitData = getFormData(form)
            // HouseService.createHome(carFormData)
            gameServices.submitGame(submitData)
            form.reset()

            } catch  (error) {
                console.error(error)
                Pop.error(error.message)
            }
    }
}