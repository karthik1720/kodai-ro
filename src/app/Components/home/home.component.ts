import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
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
    window.scrollTo(0, 0);
  }

  onScroll() {
    if (window.scrollY < this.posCurrent) {
      this.showIcon = true;
      this.notShowIcon = false;
    } else {
      this.showIcon = false;
      this.notShowIcon = true;
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
