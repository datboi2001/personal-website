import { Component } from '@angular/core';
import {EmailApiService} from "../../services/email-api.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name = "";
  email = "";
  phone = "";
  message = "";

  constructor(private emailService: EmailApiService) {

  }


  handleSubmit() {
    console.log(this.name, this.email, this.message, this.phone)
    const response = this.emailService.sendEmail(this.name, this.email, this.message, this.phone);
    response.subscribe((data) => {
      console.log(data);
    });
  }




}
