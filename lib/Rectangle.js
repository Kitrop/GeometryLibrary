import { Shape } from './shape/Shape';
/**
 * Класс, представляющий прямоугольник
 */
export class Rectangle extends Shape {
    /**
     * Создает экземпляр класса Rectangle
     * @param width Ширина прямоугольника
     * @param height Высота прямоугольника
     * @throws {Error} Если размеры недопустимы
     */
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.validateInput(width, height);
    }
    /**
     * Проверяет корректность ввода
     * @param width Ширина прямоугольника
     * @param height Высота прямоугольника
     * @throws {Error} Если ширина или высота меньше или равны нулю
     */
    validateInput(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error('Ширина и высота должны быть больше нуля.');
        }
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    /**
     * Изменяет размеры прямоугольника
     * @param width Новая ширина
     * @param height Новая высота
     * @throws {Error} Если новые размеры недопустимы
     */
    resize(width, height) {
        this.validateInput(width, height);
        this.width = width;
        this.height = height;
        this.dispatchEvent(new CustomEvent('resize', { detail: { width, height } }));
    }
    /**
     * Получает текущие размеры прямоугольника
     * @returns Объект с шириной и высотой
     */
    getDimensions() {
        return { width: this.width, height: this.height };
    }
}
