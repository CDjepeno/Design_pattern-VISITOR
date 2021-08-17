import { IVisitor } from './IVisitor';
export interface IShape {
  move(x:number, y:number):any 
  draw():any 
  accept(visitor:IVisitor):any 

}