import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private _pages: string[] = [ '', 'about' ];
  private _actualPage: number = 0;

  constructor(private _router: Router) { }

  shouldChangePage(yDelta: number) {
    if (yDelta < 0) {
      if (this._actualPage < this._pages.length - 1) this._actualPage++;
    } else {
      if (this._actualPage > 0) this._actualPage--;
    }
    if (this._actualPage < 0) this._actualPage = 0;
    this._router.navigate([this._pages[this._actualPage]]);
  }
}
