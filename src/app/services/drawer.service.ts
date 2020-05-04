import { Injectable, OnDestroy } from '@angular/core';
import { PlatformService } from './platform.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService implements OnDestroy {

  isMobile:boolean = true;
  mode: 'side' | 'over' | 'push' = 'over';
  isOpen: boolean = false;
  platformSubscription: Subscription;

  constructor(public platform: PlatformService) {
    this.setMobile(platform.isMobile);
    this.platformSubscription = this.platform.onMediaMatch.subscribe((state:any)=>{
      this.setMobile(state.isMobile);
    });
  }
  setOpenState(open: boolean) {
    if (this.isMobile) {
      this.isOpen = open;
    } else {
      this.isOpen = true;
    }
  }

  toggleState() {
    console.log('Toggle', !this.isOpen);

    this.setOpenState(!this.isOpen);
  }

  close() {
    this.setOpenState(false);
  }

  setMobile (isMobile:boolean) {
    this.isMobile = isMobile;
    if (isMobile) {
      this.mode = 'over';
      this.setOpenState(false);
    } else {
      this.mode = 'side';
      this.setOpenState(true);
    }
  }

  ngOnDestroy(): void {
    this.platformSubscription?.unsubscribe();
  }


}
