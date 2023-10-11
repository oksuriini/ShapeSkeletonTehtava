export class Point{
    private _x:number;
    private _y:number;
    
    public get x() : number {
        return this._x;
    }
    public set x(x : number) {
        this._x = x;
    }
    public get y() : number {
        return this._y;
    }
    public set y(y : number) {
        this._y = y;
    }
    constructor(x:number=0,y:number=0){
        this._x = x
        this._y = y
    }
    public toString() : string {
        return "(" + this._x +","+this._y+")"
    }
}

abstract class Shape{
    private _name:string;
    private _location:Point;
    
    public get name() : string {
        return this._name;
    }
    public set name(name : string) {
        this._name = name;
    }
    public get location() : Point {
        return this._location;
    }
    public set location(location : Point) {
        this._location = location;
    }
    constructor(name:string="AShape",location:Point = new Point()){
        this._name = name
        this._location = location
    }
    public toString():string{
        return "name:"+this._name +",location:"+this.location.toString()
    }
    public abstract draw():void;
}

class Rectangle extends Shape{
    private _width:number;
    private _height:number;
    constructor(name:string="ARect",location:Point=new Point(), width:number=100,height:number=100){
        super(name, location)
        this._height = height
        this._width = width
    }
    public toString(): string {
        return super.toString()+",w:"+this._width+",h:"+this._height
    }
    public draw(): void {
        console.log(this.toString());
    }
}

class Ellipse extends Shape{
    private _a:number;
    private _b:number;
    constructor(name:string="AnEllipse",location:Point=new Point(), a:number=100,b:number=100){
        super()
    }
    public toString(): string {
        return "AN ELLIPSE STRING"
    }
    public draw(): void {
        console.log(this.toString());
    }

}

class Square extends Rectangle{
    constructor(name:string,location:Point,side:number){
        super()
    }
}

class Circle extends Ellipse{
    constructor(name:string,location:Point,r:number){
        super()
    }
}

class Shapes{
    private shapes: Map<string,Shape> = new Map();
    public add(s:Shape): undefined | Shape{
        return
    }
    public remove(name:string):Shape|undefined{
        return
    }
    public remove2(p:Point):Shape|undefined{
        return
    }
    public drawall():void{
    }
}

let shapes : Shapes = new Shapes() 
shapes.drawall() 
shapes.add(new Rectangle("R1",new Point(1,2), 11,22 )) 
shapes.drawall() 
let n : string = "R2" 
let s : Shape|undefined = shapes.remove(n) 
console.log(`Tried to remove by: ${n}, result: ${s != undefined ? s.toString() : "not found"}`) 
shapes.drawall() 
shapes.add(new Ellipse("E1",new Point(3,4), 33,44 )) 
let p : Point = new Point(1,2) 
s = shapes.remove2(p) 
console.log(`Tried to remove by: ${p.toString()}, result: ${s != undefined ? s.toString() : "not found"}`) 
shapes.drawall() 
shapes.add(new Square("S1",new Point(5,6), 55)) 
shapes.add(new Circle("C1",new Point(7,8), 77)) 
shapes.drawall()

module.exports = {Point, Shape, Rectangle, Ellipse, Square, Circle, Shapes}
