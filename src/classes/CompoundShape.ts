import { IShape } from '../interfaces/IShape';
import { IVisitor } from '../interfaces/IVisitor';
export class CompoundShape implements IShape {

  accept(v:IVisitor) {
    return v.visitCompoundShape(this)
  }

  draw() {
    return `Composé de forme`
  }

  move() {}
}