import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
 
 myEvent(evt:any){
   console.warn(evt)
 }
}
