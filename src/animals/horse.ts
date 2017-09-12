import { Animal } from './animal'

export class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45):string {
        console.log("Galloping...");
        return super.move(distanceInMeters);
    }
}