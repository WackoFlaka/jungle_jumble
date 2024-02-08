    import { AppState } from "../AppState.js"
import { jumbleService } from "../services/JumbleService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

    
    function _drawRecords() {
        console.log("Drawing records!")
        const foundRecords = AppState.jumbles
        let html = ''
        foundRecords.forEach(record => html += record.ListTemplate)
        setHTML('records', html)
    }
    
    function _drawActiveRecord() {
        const activeRecord = AppState.activeJumble
        console.log(activeRecord)
        setHTML('activeRecord', activeRecord.ActiveListTemplate)
    }
    
    export class JumbleController {
        
        
        
        constructor(){
            console.log('controller hooked up')
            _drawRecords()
        }
        
        setActiveJumble(jumbleId){
            jumbleService.setActiveJumble(jumbleId)
            _drawActiveRecord()
        }
        
        createJumble(){
            try {
            event.preventDefault()
            const form = event.target
            const jumbleFormData = getFormData(form)
            // HouseService.createHome(carFormData)
            jumbleService.createJumble(jumbleFormData)
            form.reset()
            _drawRecords()
            } catch (error) {
                console.error(error)
                Pop.error(error.message)
            }
        }
    }