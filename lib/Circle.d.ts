import { Shape } from './shape/Shape';
/**
 * Класс, представляющий методы для работы с кругом
 */
export declare class Circle extends Shape {
    private radius;
    /**
     * Создает экземпляр класса Circle
     * @param radius Радиус круга
     * @throws {Error} Если радиус недопустимый
     */
    constructor(radius: number);
    /**
     * Проверяет корректность ввода
     * @param radius Радиус круга
     * @throws {Error} Если радиус меньше или равен нулю
     */
    private validateInput;
    getArea(): number;
    getPerimeter(): number;
    /**
     * Устанавливает новый радиус круга
     * @param radius Новый радиус
     * @throws {Error} Если радиус недопустимый
     */
    setRadius(radius: number): void;
    /**
     * Получает текущий радиус круга
     * @returns Текущий радиус
     */
    getRadius(): number;
}
