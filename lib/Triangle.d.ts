import { Shape } from './shape/Shape';
/**
 * Класс, представляющий треугольник
 */
export declare class Triangle extends Shape {
    private sideA;
    private sideB;
    private sideC;
    /**
     * Создает экземпляр класса Triangle
     * @param sideA Длина стороны A
     * @param sideB Длина стороны B
     * @param sideC Длина стороны C
     * @throws {Error} Если стороны недопустимы или не образуют треугольник
     */
    constructor(sideA: number, sideB: number, sideC: number);
    /**
     * Проверяет корректность ввода
     * @param sideA Длина стороны A
     * @param sideB Длина стороны B
     * @param sideC Длина стороны C
     * @throws {Error} Если стороны меньше или равны нулю или не образуют треугольник
     */
    private validateInput;
    getArea(): number;
    getPerimeter(): number;
    /**
     * Изменяет размеры сторон треугольника
     * @param sideA Новая длина стороны A
     * @param sideB Новая длина стороны B
     * @param sideC Новая длина стороны C
     * @throws {Error} Если новые стороны недопустимы или не образуют треугольник
     */
    resize(sideA: number, sideB: number, sideC: number): void;
    /**
     * Получает текущие длины сторон треугольника
     * @returns Объект с длинами сторон
     */
    getSides(): {
        sideA: number;
        sideB: number;
        sideC: number;
    };
}
