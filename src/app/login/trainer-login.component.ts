import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-login',
  templateUrl: './trainer-login.component.html',
  styleUrls: ['./trainer-login.component.scss']
})
export class TrainerLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  title = 'TRAINER LOGIN';
  suffix = 't';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loading = false;
  }

}
