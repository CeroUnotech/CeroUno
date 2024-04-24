import { AfterContentInit, Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [NavbarComponent]
})
export class AboutComponent implements AfterContentInit {
  private _startY: number = 0;

  constructor(private _scrollSrv: ScrollService) { }

  ngAfterContentInit() {
    document.querySelector('main')?.addEventListener('touchstart', (e: any) => {
      this._startY = e.changedTouches[0].clientY;
    });
    document.querySelector('main')?.addEventListener('touchend', (e: any) => {
      if (e.changedTouches[0].clientY > this._startY) {
        this._scrollSrv.shouldChangePage(1);
      } else {
        this._scrollSrv.shouldChangePage(-1);
      }
    });
  }

  next(e: any) {
    this._scrollSrv.shouldChangePage(e.wheelDeltaY);
  }
}
