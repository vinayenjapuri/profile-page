import { Component } from '@angular/core';
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'pp-experiences',
  standalone: true,
  imports: [
    MatExpansionModule,
    FlexLayoutModule,
    MatDivider
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

}
