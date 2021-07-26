let currentWCP = 210000;

class Propeller{
    constructor(orientation, diameter, pitch) {
        this.wcpNumber = currentWCP;
        this.orientation = orientation;
        this.diameter = diameter;
        this.pitch = pitch;
        // Standard
        this.location = 'Wildcat Propeller';
        this.condition = 'Repaired';
        this.status = 'Inventory';
        currentWCP++;
    }
    damageEvent() {
        this.condition = 'Damaged';
    }
}