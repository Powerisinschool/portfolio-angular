import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.body.classList.remove('stopped');
  }

  ngOnDestroy(): void {
    document.body.classList.add('stopped');
  }
}
