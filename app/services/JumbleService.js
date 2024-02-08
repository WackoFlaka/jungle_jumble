import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"

export class JumbleService {
    
    setActiveJumble(JumbleId){
        const foundRecord = AppState.jumbles.find(record => record.id == JumbleId)
        AppState.activeJumble = foundRecord
    }
    
    createJumble(form){
        const newJumble = new Jumble(form)
        AppState.jumbles.push(newJumble)
        console.log('jumble created', newJumble)
    }

}

export const jumbleService = new JumbleService()