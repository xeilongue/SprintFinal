import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { BoasVindasComponent } from '../../components/boas-vindas/boas-vindas.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

interface Car {
  nome: string;
  preco: number;
  alturaCacamba: number;
  alturaVeiculo: number;
  alturaSolo: number;
  capacidadeCarga: number;
  motor: number;
  potencia: number;
  volumeCacamba: number;
  roda: string;
  image: string;
}

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  imports: [MenuComponent, BoasVindasComponent, HeaderComponent, CommonModule, FooterComponent],
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent {
  cars: Car[] = [
    {
      nome: 'XL Cabine Simples 2.2 Diesel 4X4 MT 2022',
      preco: 183850,
      alturaCacamba: 511,
      alturaVeiculo: 1821,
      alturaSolo: 232,
      capacidadeCarga: 1420,
      motor: 2.2,
      potencia: 160,
      volumeCacamba: 1200,
      roda: 'Aço Estampado 16',
      image: 'XL Cabine.jpg'
    },
    {
      nome: 'XLS 2.2 Diesel 4X4 AT 2022',
      preco: 220690,
      alturaCacamba: 511,
      alturaVeiculo: 1821,
      alturaSolo: 232,
      capacidadeCarga: 1076,
      motor: 2.2,
      potencia: 160,
      volumeCacamba: 1180,
      roda: 'Aço Estampado 16',
      image: 'xls 2.2 diesel.jpg'
    },
    {
      nome: 'Storm 3.2 Diesel 4X4 AT 2022',
      preco: 222790,
      alturaCacamba: 511,
      alturaVeiculo: 1821,
      alturaSolo: 232,
      capacidadeCarga: 1040,
      motor: 3.2,
      potencia: 200,
      volumeCacamba: 1180,
      roda: 'Liga Leve 17',
      image: 'storm.jpg'
    }
  ];

  selectedCars: Car[] = [];
  isCompareVisible = false;

  // Verifica se o carro já está na lista
  getCarArrPosition(car: Car): number {
    for (let i = 0; i < this.selectedCars.length; i++) {
      if (this.selectedCars[i].nome === car.nome) {
        return i;
      }
    }
    return -1;
  }

  // Adiciona ou remove carro da lista de comparação
  setCarToCompare(event: Event, car: Car): void {
    const checkbox = event.target as HTMLInputElement;
    
    if (!checkbox.checked) {
      const carIndex = this.getCarArrPosition(car);
      if (carIndex !== -1) {
        this.selectedCars.splice(carIndex, 1);
      }
      return;
    }

    if (this.selectedCars.length > 1) {
      checkbox.checked = false;
      alert("Não pode selecionar mais de dois carros");
      return;
    }

    this.selectedCars.push(car);
  }

  // Mostra o diálogo de comparação
  showCompare(): void {
    if (this.selectedCars.length !== 2) {
      alert("O número de carros tem que ser dois!");
      return;
    }

    this.isCompareVisible = true;
  }

  // Fecha o diálogo de comparação
  closeCompare(): void {
    this.isCompareVisible = false;
  }
}