import { IVisitor } from '../interfaces/IVisitor';
import { CompoundShape } from './CompoundShape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Dot } from './Dot';
export class XmlExportVisitor implements IVisitor {

  visitDot(d: Dot) {
    return `Cordonnée du ${d.draw()}`
  }

  visitCircle(c: Circle) {
    return `Cordonnée du ${c.draw()}`
  }

  visitCompoundShape(cs: CompoundShape) {
    return `Cordonnée du ${cs.draw()}`
  }

  visitRectangle(r: Rectangle) {  
    return `Cordonnée du ${r.draw()}`
  }

}