import { Animal } from './animal'

export class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        return super.move(distanceInMeters);
    }
}