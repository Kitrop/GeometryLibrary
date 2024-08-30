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
  constructor(private radius: number) {
    super();
    this.validateInput(radius);
  }

  /**
   * Проверяет корректность ввода
   * @param radius Радиус круга
   * @throws {Error} Если радиус меньше или равен нулю
   */
  private validateInput(radius: number): void {
    if (radius <= 0) {
      throw new Error('Радиус должен быть больше нуля.');
    }
  }

  public getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  public getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  /**
   * Устанавливает новый радиус круга
   * @param radius Новый радиус
   * @throws {Error} Если радиус недопустимый
   */
  public setRadius(radius: number): void {
    this.validateInput(radius);
    this.radius = radius;
    this.dispatchEvent(new CustomEvent('radiusChange', {
      detail: {
        radius: radius,
        area: this.getArea(),
        perimeter: this.getPerimeter(),
      }
    }));
  }

  /**
   * Получает текущий радиус круга
   * @returns Текущий радиус
   */
  public getRadius(): number {
    return this.radius;
  }
}
