"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.toString = function () {
        return "(" + this._x + "," + this._y + ")";
    };
    return Point;
}());
exports.Point = Point;
var Shape = /** @class */ (function () {
    function Shape(name, location) {
        if (name === void 0) { name = "AShape"; }
        if (location === void 0) { location = new Point(); }
        this._name = name;
        this._location = location;
    }
    Object.defineProperty(Shape.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (location) {
            this._location = location;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "name:" + this._name + ",location:" + this.location.toString();
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, location, width, height) {
        if (name === void 0) { name = "ARect"; }
        if (location === void 0) { location = new Point(); }
        if (width === void 0) { width = 100; }
        if (height === void 0) { height = 100; }
        var _this = _super.call(this, name, location) || this;
        _this._height = height;
        _this._width = width;
        return _this;
    }
    Rectangle.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ",w:" + this._width + ",h:" + this._height;
    };
    Rectangle.prototype.draw = function () {
        console.log(this.toString());
    };
    return Rectangle;
}(Shape));
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(name, location, a, b) {
        if (name === void 0) { name = "AnEllipse"; }
        if (location === void 0) { location = new Point(); }
        if (a === void 0) { a = 100; }
        if (b === void 0) { b = 100; }
        return _super.call(this) || this;
    }
    Ellipse.prototype.toString = function () {
        return "AN ELLIPSE STRING";
    };
    Ellipse.prototype.draw = function () {
        console.log(this.toString());
    };
    return Ellipse;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, location, side) {
        return _super.call(this) || this;
    }
    return Square;
}(Rectangle));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, location, r) {
        return _super.call(this) || this;
    }
    return Circle;
}(Ellipse));
var Shapes = /** @class */ (function () {
    function Shapes() {
        this.shapes = new Map();
    }
    Shapes.prototype.add = function (s) {
        return;
    };
    Shapes.prototype.remove = function (name) {
        return;
    };
    Shapes.prototype.remove2 = function (p) {
        return;
    };
    Shapes.prototype.drawall = function () {
    };
    return Shapes;
}());
var shapes = new Shapes();
shapes.drawall();
shapes.add(new Rectangle("R1", new Point(1, 2), 11, 22));
shapes.drawall();
var n = "R2";
var s = shapes.remove(n);
console.log("Tried to remove by: ".concat(n, ", result: ").concat(s != undefined ? s.toString() : "not found"));
shapes.drawall();
shapes.add(new Ellipse("E1", new Point(3, 4), 33, 44));
var p = new Point(1, 2);
s = shapes.remove2(p);
console.log("Tried to remove by: ".concat(p.toString(), ", result: ").concat(s != undefined ? s.toString() : "not found"));
shapes.drawall();
shapes.add(new Square("S1", new Point(5, 6), 55));
shapes.add(new Circle("C1", new Point(7, 8), 77));
shapes.drawall();
module.exports = { Point: Point, Shape: Shape, Rectangle: Rectangle, Ellipse: Ellipse, Square: Square, Circle: Circle, Shapes: Shapes };
