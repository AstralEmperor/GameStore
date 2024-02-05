import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // changes selected-link look for each nav link clicked(selected-link)
  changeSelectedLink(i:number):any{
        const allLinks = document.querySelectorAll('.link');
        const currentLink = document.querySelectorAll('.link')[i];
        allLinks.forEach(link =>{
          link.classList.remove('selected-link');
        })
      currentLink.classList.add('selected-link');
  }
}
