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
  success = false;
  failure = false;
  constructor(private emailService: EmailApiService) {
  }


  formIsEmpty(): boolean{
    return this.name == "" || this.email == "" || this.message == "" || this.phone == "";
  }
  clearForm() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.message = "";
  }

  async handleSubmit() {
    const response = await this.emailService.sendEmail(this.name, this.email, this.message, this.phone);
    if (response.status == 200) {
      this.success = true;
      this.failure = false;
      this.clearForm();
    }
    else{
      this.failure = true;
      this.success = false;
    }
  }




}
