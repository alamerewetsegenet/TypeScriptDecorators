"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decoratorsLogMethod_1 = require("./decoratorsLogMethod");
var decoratorsMyReadOnly_1 = require("./decoratorsMyReadOnly");
var MyTestClass = /** @class */ (function () {
    function MyTestClass(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this._someValue = 'initial value';
    }
    MyTestClass.prototype.method1 = function () {
        console.log('Method1 called');
    };
    MyTestClass.prototype.method2 = function () {
        console.log('Method2 called');
    };
    Object.defineProperty(MyTestClass.prototype, "someValue", {
        get: function () {
            return this._someValue;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        decoratorsLogMethod_1.default,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyTestClass.prototype, "method1", null);
    __decorate([
        decoratorsLogMethod_1.default,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyTestClass.prototype, "method2", null);
    __decorate([
        decoratorsMyReadOnly_1.default,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], MyTestClass.prototype, "someValue", null);
    return MyTestClass;
}());
exports.default = MyTestClass;
