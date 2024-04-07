import { Component } from '@angular/core';
import {FlexModule} from "@angular/flex-layout";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {ContentService} from "../shared/content.service";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'pp-header',
  standalone: true,
  imports: [
    CommonModule,
    FlexModule,
    MatButton,
    MatIconButton,
    MatIcon,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  activeContent: string = '';
  menuContents: string[] = ["About", "Skills", "Projects"];

  constructor(private contentService: ContentService) {
  }

  public openGithub(): void {
    window.open('https://github.com/vinayenjapuri?tab=repositories', '_blank');
  }

  onClick(item: string, index: number) {
    this.activeContent=item;
    this.contentService.content.next('content-'+index);
  }
}
