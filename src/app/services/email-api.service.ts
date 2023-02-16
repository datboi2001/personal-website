import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailApiService {
  baseUrl = "https://api.sendgrid.com/v3/mail/send";

  constructor(private httpClient: HttpClient) {
  }

  sender_name: string = environment.production ? "Portfolio Website" : "Portfolio Website (development)";

  sendEmail(name: string, email: string, message: string, phone: string) {
    const requestBody = {
      "from": {
        "email": "datthew2001@gmail.com",
        "name": this.sender_name
      },
      "subject": `New message from ${this.sender_name}`,
      "content": [{
        "type": "text/html", "value": `<p>From: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
     <p>Message: ${message}</p>`
      }],
    }
    const headers = {
      "Authorization": `Bearer ${environment.sendgridApiKey}`,
      "Content-Type": "application/json"
    }

    return this.httpClient.post(this.baseUrl, requestBody, {headers: headers});


  }
}
