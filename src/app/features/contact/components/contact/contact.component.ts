import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');

  onSubmit() {
    // window.location.href = ``;
  }
}
