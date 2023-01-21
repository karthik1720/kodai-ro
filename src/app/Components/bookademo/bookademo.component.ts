import { Component, Input } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faCoffee, faMobile } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-bookademo",
  templateUrl: "./bookademo.component.html",
  styleUrls: ["./bookademo.component.scss"],
})
export class BookademoComponent {
  @Input() showMFunc: any;
  faCoffe = faMobile;
  constructor(library: FaIconLibrary) {}
}
