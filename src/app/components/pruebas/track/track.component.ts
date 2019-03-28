import { Component, OnInit } from '@angular/core';
import { TrackService} from '../../../services/services.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  trackCode: string;
  carrier: string;
  constructor(private _trackService: TrackService,
              private _router: Router) {

  }

  ngOnInit() {
  }

}
