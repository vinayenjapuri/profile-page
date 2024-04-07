import {Component, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterOutlet} from "@angular/router";
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ExperiencesComponent} from "./profile-details/experiences/experiences.component";
import {EducationComponent} from "./profile-details/education/education.component";
import {AdditionalDetailsComponent} from "./profile-details/additional-details/additional-details.component";
import {MatDialog, MatDialogContent, MatDialogModule} from "@angular/material/dialog";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {POCComponent} from "./profile-details/poc/poc.component";
import {ContentService} from "../shared/content.service";
import {MatDividerModule} from "@angular/material/divider";

export interface ContactList {
  name: string,
  icon: string | null;
  text: string;
}

@Component({
  selector: 'pp-content',
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterOutlet,
    NgOptimizedImage,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardAvatar,
    MatCardSubtitle,
    MatCardContent,
    MatTabGroup,
    MatTab,
    ExperiencesComponent,
    EducationComponent,
    AdditionalDetailsComponent,
    MatDialogContent,
    MatDialogModule,
    MatIconModule,
    MatButton,
    POCComponent,
    MatDividerModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  contents: string[] = ["About", "Skills", "Projects & Articles"];

  skills: string[] = ["Angular 2/17", "Bootstrap/NG-Bootstrap", "RxJs", "HTML", "SASS/SCSS/CSS", "JSON", "Javascript", "Typescript", "MongoDB", "Node.js", "NgRx"]

  contactList: ContactList[] = [
    {
      name: 'Phone',
      text: "+91 8247068182",
      icon: "phone"
    },
    {
      name: "Email",
      text: "vinayenjapuri@gmail.com",
      icon: "email"
    }
  ];

  hideBlankSpaces: boolean = false;

  @ViewChild('profilePhotoRef') profilePhotoRef!: TemplateRef<any>;

  constructor(private matDialog: MatDialog, private contentService: ContentService) {
    setTimeout(() => {
      this.hideBlankSpaces = true;
    }, 1000);
    this.subscribeToContentView();
  }

  public openProfile(): void {
    this.matDialog.open(this.profilePhotoRef, {
      hasBackdrop: true,
      height: "500px",
      width: "400px",
      panelClass: "profile-dialog"
    });
  }

  subscribeToContentView(): void {
    this.contentService.content.subscribe((view) => {
      document.getElementById(view)?.scrollIntoView({behavior: "smooth"});
    });
  }
}
