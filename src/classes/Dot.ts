import { IShape } from '../interfaces/IShape';
import { IVisitor } from '../interfaces/IVisitor';
export class Dot implements IShape {

  accept(v:IVisitor) {
    return v.visitDot(this)
  }

  draw() {
    return `Un point`
  }

  move() {}
}