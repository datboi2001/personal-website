import {Injectable} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser"
@Injectable({
  providedIn: 'root'
})
export class EmailApiService {
  baseUrl = "https://api.sendgrid.com/v3/mail/send";

  constructor() {
    emailjs.init("");
  }



  async sendEmail(name: string, email: string, message: string, phone: string): Promise<EmailJSResponseStatus> {

    const params = {
      from_name: name,
      from_email: email,
      message: message,
      phone: phone,
      to_name: "Datthew Nguyen"
    }
    try {
      const result = await emailjs.send("service_v70jsye", "template_lh3zs97", params, "s9bahsBFt5CEd8JoR");
      return result;
    } catch (error) {
      console.log(error);
      return new Promise<EmailJSResponseStatus>((resolve, reject) => {
        reject(error);
      });
    }


  }
}
