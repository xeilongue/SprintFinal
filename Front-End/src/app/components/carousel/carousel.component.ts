import { Component, OnInit, OnDestroy } from '@angular/core';

interface CarouselItem {
  img: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  content: CarouselItem[] = [
    {
      img: "/imagem_1.jpg",
      title: "Esta é a nova Ranger Ford 2022. Verifique novidades.",
      url: "/lancamento"
    },
    {
      img: "/imagem_2.jpg",
      title: "Ford a nossa história",
      url: "/lancamento"
    },
    {
      img: "/imagem_3.jpg",
      title: "Nova Ford Bronco Sport 2022",
      url: "/lancamento"
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel(interval: number = 2000) {
    this.intervalId = setInterval(() => {
      this.next();
    }, interval);
  }

  next() {
    if (this.currentIndex === this.content.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  nextButton() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.next();
    this.startCarousel();
  }

  backButton() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    
    if (this.currentIndex === 0) {
      this.currentIndex = this.content.length - 1;
    } else {
      this.currentIndex--;
    }
    
    this.startCarousel();
  }
}
