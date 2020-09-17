import Package from "../../../model/package";
import DiagramCreator from "../../../../helper/diagramCreator";

export default class PackageChangeController {
  public static ChangePackage(change: any, packageThatChange: Package) {

    if (change.parent === null) {
      DiagramCreator.diagram[DiagramCreator.activeIndex].removePackage(
        packageThatChange,
        true
      );
    } 
    
    else if (change.parent.value instanceof Package) {
        if (change.previous != null && change.previous.value instanceof Package) {
            
            (change.previous.value as Package).RemovePackageReferences(
            packageThatChange
            );
        }

        else if (change.previous == null) {

            DiagramCreator.diagram[DiagramCreator.activeIndex].addPackage(
            packageThatChange
            );
        }

      (change.parent.value as Package).AddPackageReference(packageThatChange);
      packageThatChange.package = (change.parent.value as Package).getName();
    } 
    
    else if (typeof change.parent.value === "undefined") {
      if (change.previous === null) {
        DiagramCreator.diagram[DiagramCreator.activeIndex].addPackage(
          packageThatChange
        );
      } else if (change.previous.value instanceof Package) {
        (change.previous.value as Package).RemovePackageReferences(
          packageThatChange
        );
      }
    }
  }
}
