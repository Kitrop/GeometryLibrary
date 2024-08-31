# Geometry Library

## Описание

Библиотека предоставляет функционал для работы с геометрическими фигурами: треугольник, прямоугольник и круг. Каждый класс включает методы для расчета площади, периметра, а также для сравнения фигур по этим параметрам.

## Установка

Для установки пропишите команду:

```bash
npm install
```

## Примеры использования

**Работа с треугольниками:**

```ts
import {Triangle} from 'tz_geometric_shapes_shabolin/lib/Triangle';

// Создаем треугольник со сторонами 3, 4, 5
const triangle = new Triangle(3, 4, 5);

console.log('Площадь треугольника:', triangle.getArea());
console.log('Периметр треугольника:', triangle.getPerimeter());

// Изменение сторон треугольника
triangle.resize(6, 8, 10);
console.log('Новая площадь треугольника:', triangle.getArea());
```

**Работа с прямоугольниками:**

```ts
import { Rectangle } from 'tz_geometric_shapes_shabolin/lib/Rectangle';

// Создаем прямоугольник с шириной 5 и высотой 10
const rectangle = new Rectangle(5, 10);

console.log('Площадь прямоугольника:', rectangle.getArea());
console.log('Периметр прямоугольника:', rectangle.getPerimeter());

// Изменение размеров прямоугольника
rectangle.resize(8, 12);
console.log('Новая площадь прямоугольника:', rectangle.getArea());
```

**Работа с кругами:**

```ts
import { Circle } from 'tz_geometric_shapes_shabolin/lib/Circle';

// Создаем круг с радиусом 7
const circle = new Circle(7);

console.log('Площадь круга:', circle.getArea());
console.log('Периметр круга:', circle.getPerimeter());

// Изменение радиуса круга
circle.setRadius(14);
console.log('Новая площадь круга:', circle.getArea());

```