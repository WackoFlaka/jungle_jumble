import { generateId } from "../utils/GenerateId.js"

export class Jumble {
    constructor( data) {
     this.id = generateId()
      this.name = data.name
      this.body = data.body
      // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
      this.fastestTime = null
      this.startTime = null
      this.endTime = null
    }
  
      get ListTemplate() { // a basic list template to get drawing
          return `
          <div class="d-flex flex-row justify-content-evenly align-items-baseline fs-5">
          <button type="button" onclick="app.JumbleController.setActiveJumble('${this.id}')" class="btn btn-success">start</button>
          <p>${this.name}</p>
          <p><span class="mdi mdi-clock-time-eight"></span>${this.fastestTime}</p>
          <p></p>
        </div>
          
          `
      }
      
      get ActiveListTemplate() {
        return `
        <p>${this.body}</p>
        `
      }
    }