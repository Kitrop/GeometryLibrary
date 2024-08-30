import { Shape } from './shape/Shape';
/**
 * Класс, представляющий прямоугольник
 */
export declare class Rectangle extends Shape {
    private width;
    private height;
    /**
     * Создает экземпляр класса Rectangle
     * @param width Ширина прямоугольника
     * @param height Высота прямоугольника
     * @throws {Error} Если размеры недопустимы
     */
    constructor(width: number, height: number);
    /**
     * Проверяет корректность ввода
     * @param width Ширина прямоугольника
     * @param height Высота прямоугольника
     * @throws {Error} Если ширина или высота меньше или равны нулю
     */
    private validateInput;
    getArea(): number;
    getPerimeter(): number;
    /**
     * Изменяет размеры прямоугольника
     * @param width Новая ширина
     * @param height Новая высота
     * @throws {Error} Если новые размеры недопустимы
     */
    resize(width: number, height: number): void;
    /**
     * Получает текущие размеры прямоугольника
     * @returns Объект с шириной и высотой
     */
    getDimensions(): {
        width: number;
        height: number;
    };
}
