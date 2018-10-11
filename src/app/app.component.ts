import { Component } from '@angular/core';
import { IImage } from '../../node_modules/ng-simple-slideshow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'veterinaria';
  imageUrls: (string | IImage)[] = [
    { url: '../assets/img/imagen1.png', caption: 'The first slide' },
    { url: '../assets/img/imagen2.jpg', clickAction: () => alert('custom click function') },
    { url: '../assets/img/imagen3.jpg', caption: 'Apple TV' },
    '../assets/img/imagen4.jng',
    { url: '../assets/img/imagen5.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';

  ngOnInit() {
    // adding an image url dynamically.
    setTimeout(() => {
      console.log('adding an image url dynamically.');
      this.imageUrls.push('https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg');
    }, 2000);
  }
}
