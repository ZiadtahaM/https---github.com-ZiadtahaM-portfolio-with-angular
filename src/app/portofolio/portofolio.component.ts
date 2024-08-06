import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css'
})
export class PortfolioComponent {
  showPopup = false;
  popupImageSrc = ''; 

  openPopup(imageUrl: string) {
    this.popupImageSrc = imageUrl;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}