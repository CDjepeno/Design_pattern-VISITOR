import { Dot } from '../classes/Dot';
import { Circle } from '../classes/Circle';
import { Rectangle } from '../classes/Rectangle';
import { CompoundShape } from '../classes/CompoundShape';
export interface IVisitor {
  visitDot(d: Dot): any 
  visitCircle(c: Circle): any 
  visitRectangle(r: Rectangle): any 
  visitCompoundShape(cs: CompoundShape): any 

}