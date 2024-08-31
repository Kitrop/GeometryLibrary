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
exports.Rectangle = void 0;
var Shape_1 = require("./shape/Shape");
/**
 * Класс, представляющий прямоугольник
 */
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    /**
     * Создает экземпляр класса Rectangle
     * @param width Ширина прямоугольника
     * @param height Высота прямоугольника
     * @throws {Error} Если размеры недопустимы
     */
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.validateInput(width, height);
        return _this;
    }
    /**
     * Проверяет корректность ввода
     * @param width Ширина прямоугольника
     * @param height Высота прямоугольника
     * @throws {Error} Если ширина или высота меньше или равны нулю
     */
    Rectangle.prototype.validateInput = function (width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error('Ширина и высота должны быть больше нуля.');
        }
    };
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    /**
     * Изменяет размеры прямоугольника
     * @param width Новая ширина
     * @param height Новая высота
     * @throws {Error} Если новые размеры недопустимы
     */
    Rectangle.prototype.resize = function (width, height) {
        this.validateInput(width, height);
        this.width = width;
        this.height = height;
        this.dispatchEvent(new CustomEvent('resize', {
            detail: {
                width: this.width,
                height: this.height,
                area: this.getArea(),
                getPerimeter: this.getPerimeter(),
            }
        }));
    };
    /**
     * Получает текущие размеры прямоугольника
     * @returns Объект с шириной и высотой
     */
    Rectangle.prototype.getDimensions = function () {
        return { width: this.width, height: this.height };
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
