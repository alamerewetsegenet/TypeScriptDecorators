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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleLogger = void 0;
var MyTestClass_1 = require("./MyTestClass");
function SimpleLogger(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            console.log("Class ".concat(constructor.name, " instantiated with args:"), args);
            return _this;
        }
        return class_1;
    }(constructor));
}
exports.SimpleLogger = SimpleLogger;
var MyTestClassWithLogger = SimpleLogger(MyTestClass_1.MyTestClass);
var myObj = new MyTestClassWithLogger("value1", 42);
console.log(myObj.property1); // Output: value1
console.log(myObj.property2); // Output: 42
myObj.method1(); // Output: Method 1 called
myObj.method2(); // Output: Method 2 called
