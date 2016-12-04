import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-athlete-login',
  templateUrl: './athlete-login.component.html',
  styleUrls: ['./athlete-login.component.scss']
})
export class AthleteLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  title = 'ATHLETE LOGIN';
  suffix = 'a';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loading = false;
  }

}
