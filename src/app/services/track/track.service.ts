import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { URL_ENVIOS_BACK } from "src/config/config";
import { environment } from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class TrackService {
  trackCode: string;
  carrier: string;


  constructor(private _http: HttpClient) {}

  trackShippment(trackCode: string,
                 carrier: string) {

    const trackData = { trackCode, carrier};
    console.log(trackData);

    const url = environment.backURL + 'paqueterias/rastreaEnvio';

    return this._http.post(url, trackData);


  }

}
