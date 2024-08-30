import { IShape } from './IShape';
/**
 * Класс, реализующий общие методы для всех фигур
 */
export declare abstract class Shape extends EventTarget implements IShape {
    abstract getArea(): number;
    abstract getPerimeter(): number;
    isEqualArea(shape: IShape): boolean;
    isEqualPerimeter(shape: IShape): boolean;
}
