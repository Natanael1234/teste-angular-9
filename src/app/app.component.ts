import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DrawerService } from './services/drawer.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { PlatformService } from './services/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(changeDetectorRef: ChangeDetectorRef, public drawer: DrawerService, public platform: PlatformService) {
    this.platform.setMobileQueryListener(changeDetectorRef);
  }

}
