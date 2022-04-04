import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/community'])
    }
  }
}
