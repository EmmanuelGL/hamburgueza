import { Component, OnInit } from '@angular/core';
declare var JQuery: any;
declare var $ :any;
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.zoom').mlens({
      lensShape: "circle",                // shape of the lens (circle/square)
      lensSize: ["75%","85%"],            // lens dimensions (in px or in % with respect to image dimensions)
                                          // can be different for X and Y dimension
      borderSize: 4,                  // size of the lens border (in px)
      borderColor: "#fff",            // color of the lens border (#hex)
      borderRadius: 0,                // border radius (optional, only if the shape is square)
      // imgOverlay: $("#gear").attr("data-overlay"), // path of the overlay image (optional)
      overlayAdapt: true,    // true if the overlay image has to adapt to the lens size (boolean)
      zoomLevel: .5,          // zoom level multiplicator (number)
      responsive: true       // true if mlens has to be responsive (boolean)
    })
  }


  
               
            
}
