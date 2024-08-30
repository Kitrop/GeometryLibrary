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
  constructor(private width: number, private height: number) {
    super();
    this.validateInput(width, height);
  }

  /**
   * Проверяет корректность ввода
   * @param width Ширина прямоугольника
   * @param height Высота прямоугольника
   * @throws {Error} Если ширина или высота меньше или равны нулю
   */
  private validateInput(width: number, height: number): void {
    if (width <= 0 || height <= 0) {
      throw new Error('Ширина и высота должны быть больше нуля.');
    }
  }

  public getArea(): number {
    return this.width * this.height;
  }

  public getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

  /**
   * Изменяет размеры прямоугольника
   * @param width Новая ширина
   * @param height Новая высота
   * @throws {Error} Если новые размеры недопустимы
   */
  public resize(width: number, height: number): void {
    this.validateInput(width, height);
    this.width = width;
    this.height = height;
    this.dispatchEvent(new CustomEvent('resize', { detail: { width, height } }));
  }

  /**
   * Получает текущие размеры прямоугольника
   * @returns Объект с шириной и высотой
   */
  public getDimensions(): { width: number; height: number } {
    return { width: this.width, height: this.height };
  }
}
