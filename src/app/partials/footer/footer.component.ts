import { Component } from '@angular/core';
import {faDiscord, faLinkedin} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faDiscord = faDiscord;
  faLinkedin = faLinkedin;
}
