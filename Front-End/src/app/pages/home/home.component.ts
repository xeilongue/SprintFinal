import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { BoasVindasComponent } from '../../components/boas-vindas/boas-vindas.component';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, BoasVindasComponent, HeaderComponent, CarouselComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router = inject(Router)

  logout() {
    sessionStorage.clear()
    this.router.navigate([""])
  }

}
