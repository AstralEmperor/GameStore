import { Component, Input } from '@angular/core';

@Component({
  selector: 'store-part-category',
  templateUrl: './store-part-category.component.html',
  styleUrls: ['./store-part-category.component.css']
})
export class StorePartCategoryComponent {

  @Input()
  imageSrc!:string;

  @Input()
  categoryTitle!:string;

  @Input()
  categoryName!:string;

  @Input()
  link?:string;
}
