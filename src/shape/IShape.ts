/**
 * Интерфейс, определяющий общие методы для геометрических фигур
 */
export interface IShape extends EventTarget {
  /**
   * Вычисляет площадь фигуры
   * @returns Площадь фигуры
   */
  getArea(): number;

  /**
   * Вычисляет периметр фигуры
   * @returns Периметр фигуры
   */
  getPerimeter(): number;

  /**
   * Сравнивает текущую фигуру с другой по площади
   * @param shape Другая фигура для сравнения
   * @returns `true`, если площади равны, иначе `false`
   */
  isEqualArea(shape: IShape): boolean;

  /**
   * Сравнивает текущую фигуру с другой по периметру
   * @param shape Другая фигура для сравнения
   * @returns `true`, если периметры равны, иначе `false`
   */
  isEqualPerimeter(shape: IShape): boolean;
}
