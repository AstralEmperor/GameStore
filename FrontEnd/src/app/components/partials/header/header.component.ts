import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user!:User;
  constructor(private userService:UserService){
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }
  // changes selected-link look for each nav link clicked(selected-link)
  changeSelectedLink(i:number):any{
        const allLinks = document.querySelectorAll('.link');
        const currentLink = document.querySelectorAll('.link')[i];
        allLinks.forEach(link =>{
          link.classList.remove('selected-link');
        })
      currentLink.classList.add('selected-link');
  }
  logout(){
    this.userService.logout();
  }
}
