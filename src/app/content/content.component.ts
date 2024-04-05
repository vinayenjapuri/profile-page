import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'pp-content',
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
