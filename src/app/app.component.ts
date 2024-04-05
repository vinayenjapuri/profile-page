import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
import { forEach } from 'lodash';

export interface Icons {
  name: string;
  url: string;
  iconName: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile-page';

  icons: Icons[] = [
    {
      name: "GitHub",
      iconName: "github",
      url: "/assets/svgs/github-mark.svg"
    }
  ]

  constructor(private domSanitizer: DomSanitizer, private matIconRegistry : MatIconRegistry) {
    this.insertIconsToMatRegistry();
  }

  private insertIconsToMatRegistry() {
    forEach(this.icons, (icon) => {
      this.matIconRegistry.addSvgIcon(icon.iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url));
    });
  }
}
