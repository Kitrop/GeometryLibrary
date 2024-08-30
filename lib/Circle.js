import { Shape } from './shape/Shape';
/**
 * Класс, представляющий методы для работы с кругом
 */
export class Circle extends Shape {
    /**
     * Создает экземпляр класса Circle
     * @param radius Радиус круга
     * @throws {Error} Если радиус недопустимый
     */
    constructor(radius) {
        super();
        this.radius = radius;
        this.validateInput(radius);
    }
    /**
     * Проверяет корректность ввода
     * @param radius Радиус круга
     * @throws {Error} Если радиус меньше или равен нулю
     */
    validateInput(radius) {
        if (radius <= 0) {
            throw new Error('Радиус должен быть больше нуля.');
        }
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    /**
     * Устанавливает новый радиус круга
     * @param radius Новый радиус
     * @throws {Error} Если радиус недопустимый
     */
    setRadius(radius) {
        this.validateInput(radius);
        this.radius = radius;
        this.dispatchEvent(new CustomEvent('radiusChange', { detail: { radius } }));
    }
    /**
     * Получает текущий радиус круга
     * @returns Текущий радиус
     */
    getRadius() {
        return this.radius;
    }
}
