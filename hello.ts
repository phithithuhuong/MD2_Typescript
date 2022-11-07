enum Speed{
    SLOW  = 1,
    MEDIUM = 2,
    FAST = 3
}

class Fan{
    private _speed : Speed = Speed.SLOW;
    private _on : boolean = false ;
    private _radius : number = 5;
    private _color : string = 'blue';

    get SLOW() {
       return this._speed
    }

    set SLOW(value) {
        this._speed = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get on() {
        return this._on;
    }

    set on(value) {
        this._on = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
    toString1(){
        return `Trang thai quat : ${this._on} , Toc do quat : ${this._speed}, Ban kinh quat : ${this._radius} , Mau quat : ${this._color}`
    }
}
let fan = new Fan()
console.log(fan.toString1())
