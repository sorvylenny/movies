import { Component, ElementRef, OnInit } from "@angular/core";
import { TvService } from "../services/tv.service";
import { Router } from "@angular/router";
import { ResultTv } from "../interface/tv.interface";

@Component({
  selector: "app-alltv",
  templateUrl: "./alltv.component.html",
  styleUrls: ["./alltv.component.css"]
})
export class AlltvComponent implements OnInit {
  playingTv: ResultTv[] = [];
  page: number = 1;
  searchControl: string = "";

  constructor(
    private tvService: TvService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.allTv(this.page);
  }
  /* Method that brings information from the tv service and pagination */
  allTv(page: number) {
    this.tvService.tvAll(this.page).subscribe((tv: any) => {
      this.playingTv = tv.results;
    });
  }
  /* Method information from the search tv service */
  searchForName() {
    if (this.searchControl && this.searchControl.trim() !== '') {
      this.tvService.searchTv(this.searchControl).subscribe((search: any) => {
        this.playingTv = search.results;
      });
    }
  }

  /*Pagination method the previous*/
  previousPage(page: number) {
    if (page === 1) {
      this.scrollToTop();
      return;
    }
    this.allTv((this.page = page - 1));
  }
  /*Pagination method the next*/
  nextPage(page: number) {
    this.allTv((this.page = page + 1));
    this.scrollToTop();
  }
  /* Methods to capture page addresses */
  directPageOne(page: number) {
    this.allTv((this.page = page));
    this.scrollToTop();
  }

  directPageTwo(page: number) {
    this.allTv((this.page = page + 1));
    this.scrollToTop();
  }
  directPageTree(page: number) {
    this.allTv((this.page = page + 2));
    this.scrollToTop();
  }
  /* Method to browse the tv id and see more information about it */
  tvDetails(id: number) {
    this.router.navigate(["detailsTv", id]);
  }
  /* Method to display the image */
  getImageUrl(poster_path: string): string {
    if (
      !poster_path ||
      poster_path.toLowerCase() === "null" ||
      poster_path.trim() === ""
    ) {
      return "assets/Image_not_available.jpg";
    } else {
      return "https://image.tmdb.org/t/p/w500" + poster_path;
    }
  }
  /* ScrollToTop function scrolls the browser windows */
  private scrollToTop() {
    const targetElement = this.elementRef.nativeElement;
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
  }
}
