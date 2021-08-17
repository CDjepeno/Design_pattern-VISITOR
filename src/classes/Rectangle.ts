import { IShape } from '../interfaces/IShape';
import { IVisitor } from '../interfaces/IVisitor';
export class Rectangle implements IShape {

  accept(v:IVisitor) {
    return v.visitRectangle(this)
  }

  draw() {
    return `rectangle`
  }

  move() {}
}