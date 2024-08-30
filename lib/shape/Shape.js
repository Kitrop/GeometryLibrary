/**
 * Класс, реализующий общие методы для всех фигур
 */
export class Shape extends EventTarget {
    isEqualArea(shape) {
        return this.getArea() === shape.getArea();
    }
    isEqualPerimeter(shape) {
        return this.getPerimeter() === shape.getPerimeter();
    }
}
