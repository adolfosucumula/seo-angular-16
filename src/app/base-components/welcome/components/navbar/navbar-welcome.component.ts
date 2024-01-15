import { Component, Input,
  HostListener
}
  from '@angular/core';
import { navbarMenu } from './css-utils/menu';
import { toolbarCSS } from './css-utils/css-identities';

@Component({
  selector: 'app-navbar-welcome',
  templateUrl: './navbar-welcome.component.html',
  styleUrls: ['./navbar-welcome.component.scss']
})
export class NavbarWelcomeComponent {

  title = "XProd Sf";
  menuItems = navbarMenu;
  navbar_ = false;
  nav_links = false;
  isMenuOpen = false;
  toolbarClasses = toolbarCSS;

  authRouter = {
    login: "/auth/sign-in",
    register: "/auth/sign-up",
    logout: "/auth/sign-out",
    request: "/",
    facebook: "/",
    twiter: "/",
    instagram: "/",
  }


  @Input() page = 'home'

  ngOnInit(): void {
    this.menuItems[1].isLogged = true
  }

  @HostListener("document: scroll")
  scrollfunction(){
    if(document.body.scrollTop > 1
      || document.documentElement.scrollTop > 1
      ) {
      this.navbar_ = true
      this.nav_links = true
    }else{
      this.navbar_ = false
      this.nav_links  = false
    }
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

}
