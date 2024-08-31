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
exports.Triangle = void 0;
var Shape_1 = require("./shape/Shape");
/**
 * Класс, представляющий треугольник
 */
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    /**
     * Создает экземпляр класса Triangle
     * @param sideA Длина стороны A
     * @param sideB Длина стороны B
     * @param sideC Длина стороны C
     * @throws {Error} Если стороны недопустимы или не образуют треугольник
     */
    function Triangle(sideA, sideB, sideC) {
        var _this = _super.call(this) || this;
        _this.sideA = sideA;
        _this.sideB = sideB;
        _this.sideC = sideC;
        _this.validateInput(sideA, sideB, sideC);
        return _this;
    }
    /**
     * Проверяет корректность ввода
     * @param sideA Длина стороны A
     * @param sideB Длина стороны B
     * @param sideC Длина стороны C
     * @throws {Error} Если стороны меньше или равны нулю или не образуют треугольник
     */
    Triangle.prototype.validateInput = function (sideA, sideB, sideC) {
        if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
            throw new Error('Стороны должны быть больше нуля.');
        }
        if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
            throw new Error('Сумма любых двух сторон должна быть больше третьей.');
        }
    };
    Triangle.prototype.getArea = function () {
        var s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    };
    Triangle.prototype.getPerimeter = function () {
        return this.sideA + this.sideB + this.sideC;
    };
    /**
     * Изменяет размеры сторон треугольника
     * @param sideA Новая длина стороны A
     * @param sideB Новая длина стороны B
     * @param sideC Новая длина стороны C
     * @throws {Error} Если новые стороны недопустимы или не образуют треугольник
     */
    Triangle.prototype.resize = function (sideA, sideB, sideC) {
        this.validateInput(sideA, sideB, sideC);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.dispatchEvent(new CustomEvent('resize', {
            detail: {
                sides: [this.sideA, this.sideB, this.sideC],
                area: this.getArea(),
                getPerimeter: this.getPerimeter(),
            }
        }));
    };
    /**
     * Получает текущие длины сторон треугольника
     * @returns Объект с длинами сторон
     */
    Triangle.prototype.getSides = function () {
        return { sideA: this.sideA, sideB: this.sideB, sideC: this.sideC };
    };
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
