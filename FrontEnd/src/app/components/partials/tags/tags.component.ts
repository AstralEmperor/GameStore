import { Component, Input } from '@angular/core';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  @Input()
  title!:string;
}
