import { Injectable, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformService implements OnDestroy {

  onMediaMatch = new Subject<{isMobile:boolean}>();

  isMobile: boolean = true;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(public media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile = this.mobileQuery.matches;
    this.onMediaMatch.next({isMobile: this.mobileQuery.matches});
  }

  setMobileQueryListener (changeDetectorRef: ChangeDetectorRef) {
    this._mobileQueryListener = () => {
      this.isMobile = this.mobileQuery.matches;
      this.onMediaMatch.next({isMobile: this.mobileQuery.matches});
      return changeDetectorRef.detectChanges;
    }
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
