import { Rectangle } from './classes/Rectangle';
import { Circle } from './classes/Circle';
import { Dot } from './classes/Dot';
import { CompoundShape } from './classes/CompoundShape';
import { XmlExportVisitor } from './classes/XmlExportVisitor';
export class App {
  static main1() {
    const component = new Rectangle()
    const exportVisitor = new XmlExportVisitor()

    return component.accept(exportVisitor)
  }

  static main2() {
    const component = new Circle() 
    const exportVisitor = new XmlExportVisitor()

    return component.accept(exportVisitor)
  }

}