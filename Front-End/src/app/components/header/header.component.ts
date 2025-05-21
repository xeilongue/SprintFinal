import { Component, inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  router = inject(Router)

  logout() {
    sessionStorage.clear()
    this.router.navigate([""])
  }

}