import {
  Component,
  ContentChild,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @Input() showData: any;

  constructor(private data: DataService) {}
  @Input() showMFunc: any;
  ngOnInit(): void {
    this.changeImg();
    window.addEventListener("scroll", (e) => {
      this.onScroll();
    });
  }
  posCurrent: number = 0;
  name: string = "karthik";
  images: any[] = ["banner1.jpg", "banner2.jpg", "banner3.jpeg"];
  i: any = 0;
  showIcon: boolean = false;
  notShowIcon: boolean = true;
  newimg: any = this.images[0];
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  onScroll() {
    // console.log(window.scrollY);
    if (window.scrollY > 700) {
      this.showIcon = true;
    } else {
      this.showIcon = false;
    }
    this.posCurrent = window.scrollY;
  }

  changeImg() {
    setInterval(() => {
      if (this.i < this.images.length - 1) {
        this.i++;
      } else {
        this.i = 0;
      }
      this.newimg = this.images[this.i];
    }, 3000);
  }
}
