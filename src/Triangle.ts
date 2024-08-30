import { Shape } from './shape/Shape';

/**
 * Класс, представляющий треугольник
 */
export class Triangle extends Shape {
  /**
   * Создает экземпляр класса Triangle
   * @param sideA Длина стороны A
   * @param sideB Длина стороны B
   * @param sideC Длина стороны C
   * @throws {Error} Если стороны недопустимы или не образуют треугольник
   */
  constructor(private sideA: number, private sideB: number, private sideC: number) {
    super();
    this.validateInput(sideA, sideB, sideC);
  }

  /**
   * Проверяет корректность ввода
   * @param sideA Длина стороны A
   * @param sideB Длина стороны B
   * @param sideC Длина стороны C
   * @throws {Error} Если стороны меньше или равны нулю или не образуют треугольник
   */
  private validateInput(sideA: number, sideB: number, sideC: number): void {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Стороны должны быть больше нуля.');
    }
    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
      throw new Error('Сумма любых двух сторон должна быть больше третьей.');
    }
  }

  public getArea(): number {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }

  public getPerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }

  /**
   * Изменяет размеры сторон треугольника
   * @param sideA Новая длина стороны A
   * @param sideB Новая длина стороны B
   * @param sideC Новая длина стороны C
   * @throws {Error} Если новые стороны недопустимы или не образуют треугольник
   */
  public resize(sideA: number, sideB: number, sideC: number): void {
    this.validateInput(sideA, sideB, sideC);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.dispatchEvent(new CustomEvent('resize', { detail: { sideA, sideB, sideC } }));
  }

  /**
   * Получает текущие длины сторон треугольника
   * @returns Объект с длинами сторон
   */
  public getSides(): { sideA: number; sideB: number; sideC: number } {
    return { sideA: this.sideA, sideB: this.sideB, sideC: this.sideC };
  }
}
