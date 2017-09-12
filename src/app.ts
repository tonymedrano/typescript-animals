import { Animal } from './animals/animal'
import { Snake } from './animals/snake'
import { Horse } from './animals/horse'

export class God {
    name:string
    constructor(name:string) {
        this.name = name
    }
    run() {
        let div = document.createElement("div");
        let content = document.createTextNode(`Running ${this.name}...`);
        div.appendChild(content);
        document.body.appendChild(div)
    }
    test(element:any){
        let div = document.createElement("span");
        let content = document.createTextNode(element);
        div.appendChild(content);
        document.body.appendChild(div)
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

let app = new God("God")
app.run()
app.test(sam.move())
app.test(tom.move(34))