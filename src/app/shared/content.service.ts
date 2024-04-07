import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public content: Subject<string> = new Subject<string>();

  constructor() { }
}
