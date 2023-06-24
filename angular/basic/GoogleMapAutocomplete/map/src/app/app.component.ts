import {
  Component,
  ViewChild,
  ElementRef,
  NgZone,
  OnInit,
} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
//import {} from 'googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'map';

  @ViewChild('search')
  public searchElementRef: ElementRef;
  @ViewChild('map')
  public map: ElementRef;

  zoom: number;
  latitude: number;
  longitude: number;
  latlongs: any = [];
  latlong: any = {};
  private geoCoder;
  address;

  public searchControl: FormControl;

  constructor(private mapApiLoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    this.zoom = 12;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    this.searchControl = new FormControl();
    this.setCurrentPosition();
    this.getLocation();
  }

  getLocation() {
    this.mapApiLoader.load().then(() => {
      const autocomlete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: [],
          componentRestrictions: { country: 'IN' },
        }
      );
      autocomlete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomlete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          const latlong = {
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
          };
          console.log(place);
          this.latlongs.push(latlong);
          this.updatePosition(latlong);
          console.log(place);
          this.searchControl.reset();
        });
      });
    });
  }

  private updatePosition(latlong) {
    this.latitude = latlong.latitude;
    this.longitude = latlong.longitude;
    this.zoom = 12;
    this.getAddress(this.latitude, this.longitude);
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onMapClicked(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  dragEnd(event) {
    console.log(event);
    const latlong = {
      latitude: event.coords.lat,
      longitude: event.coords.lng,
    };
    this.updatePosition(latlong);
  }

  getAddress(latitude, longitude) {
    this.geoCoder = new google.maps.Geocoder();
    console.log(this.geoCoder);

    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results, status) => {
        console.log(results);
        console.log(status);
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );
  }
}
