import { Component } from '@angular/core';
import {FlexModule} from "@angular/flex-layout";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'pp-header',
  standalone: true,
  imports: [
    FlexModule,
    MatButton,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
