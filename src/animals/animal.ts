export class Animal {
    name: string
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0):string {
        return `${this.name} moved ${distanceInMeters}m.`
    }
}