import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'carousel-navigation',
  standalone: true,
	imports: [NgbCarouselModule, CommonModule,NgbCarouselModule],
	templateUrl: './carousel-navigation.html',
	providers: [NgbCarouselConfig],
})
export class NgbdCarouselNavigation {
	showNavigationArrows = true;
	showNavigationIndicators = true;
	images = [
		'/assets/layout/images/renders/render (1).svg',
		'/assets/layout/images/renders/render (2).svg',
		'/assets/layout/images/renders/render (3).svg',
		'/assets/layout/images/renders/render (4).svg',
		'/assets/layout/images/renders/render (5).svg',
		'/assets/layout/images/renders/render (6).svg',
		'/assets/layout/images/renders/render (7).svg',
		
	  ];

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}