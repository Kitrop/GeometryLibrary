import { IShape } from './IShape';

/**
 * Класс, реализующий общие методы для всех фигур
 */
export abstract class Shape extends EventTarget implements IShape {
  abstract getArea(): number;
  abstract getPerimeter(): number;

  public isEqualArea(shape: IShape): boolean {
    return this.getArea() === shape.getArea();
  }

  public isEqualPerimeter(shape: IShape): boolean {
    return this.getPerimeter() === shape.getPerimeter();
  }
}
