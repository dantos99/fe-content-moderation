import { Component, OnInit } from '@angular/core';
import { TextService } from '../text.service';

@Component({
  selector: 'app-send-text',
  templateUrl: './send-text.component.html',
  styleUrl: './send-text.component.scss'
})
export class SendTextComponent {


  textUser: String = ''; //Variabile per memorizzare il commento inserito dall'utente
  responseMessage: String = ''; //Variabile per memorizzare la risposta del BE

  constructor(private textService: TextService) { }

  send(): void {

    this.textService.sendText(this.textUser).subscribe((response) => {
      //@ts-ignore
      this.responseMessage = response.text;
      console.log(response);
    })
  }
}
