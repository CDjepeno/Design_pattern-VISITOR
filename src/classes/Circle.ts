import { IShape } from '../interfaces/IShape';
import { IVisitor } from '../interfaces/IVisitor';
export class Circle implements IShape {

  accept(v:IVisitor) {
    return v.visitCircle(this)
  }

  draw() {
    return `cercle`
  }

  move() {}
}