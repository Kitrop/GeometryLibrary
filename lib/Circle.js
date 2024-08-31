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
exports.Circle = void 0;
var Shape_1 = require("./shape/Shape");
/**
 * Класс, представляющий методы для работы с кругом
 */
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    /**
     * Создает экземпляр класса Circle
     * @param radius Радиус круга
     * @throws {Error} Если радиус недопустимый
     */
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.validateInput(radius);
        return _this;
    }
    /**
     * Проверяет корректность ввода
     * @param radius Радиус круга
     * @throws {Error} Если радиус меньше или равен нулю
     */
    Circle.prototype.validateInput = function (radius) {
        if (radius <= 0) {
            throw new Error('Радиус должен быть больше нуля.');
        }
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    /**
     * Устанавливает новый радиус круга
     * @param radius Новый радиус
     * @throws {Error} Если радиус недопустимый
     */
    Circle.prototype.setRadius = function (radius) {
        this.validateInput(radius);
        this.radius = radius;
        this.dispatchEvent(new CustomEvent('radiusChange', {
            detail: {
                radius: radius,
                area: this.getArea(),
                perimeter: this.getPerimeter(),
            }
        }));
    };
    /**
     * Получает текущий радиус круга
     * @returns Текущий радиус
     */
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
