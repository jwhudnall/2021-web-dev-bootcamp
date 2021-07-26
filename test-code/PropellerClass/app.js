let currentWCP = 210000;

class StandardItem {
    constructor(condition, status, location) {
        this.condition = condition;
        this.status = status;
        this.location = location;
    }
}

class Propeller extends StandardItem {
    constructor(condition, status, location, orientation, diameter, pitch) {
        super(condition, status, location);
        this.wcp = currentWCP;
        this.orientation = orientation;
        this.diameter = diameter;
        this.pitch = pitch;
        currentWCP++;
    }
    damageEvent() {
        this.condition = 'Damaged';
    }
}