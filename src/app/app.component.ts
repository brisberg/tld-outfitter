import {Component} from '@angular/core';
import {Outfit} from 'src/outfitter/outfit';
import {SimpleHat, SimpleJacket} from 'src/outfitter/testing/gear-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tld-outfitter';
  outfit = new Outfit('', [SimpleJacket, SimpleHat]);
}
