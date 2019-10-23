import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  public markers = [];

  public lat: number = 0;
  public long: number = 0;

  constructor(private service: CodadeService) { }

  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      })
    }

    this.service.find().subscribe(result => {
      this.markers = result;
    }, error => {
      console.log(error.message);
    })

  }

}
