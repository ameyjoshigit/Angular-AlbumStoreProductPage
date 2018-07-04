import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Album } from '../album';

import { Track } from '../track';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

	track: Track;
	
	constructor(private _productService: ProductService) { }
	
	ngOnInit() {
		this._productService.getTrack(1).subscribe(response => this.track = response);
	}

}