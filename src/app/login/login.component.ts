import { Component, OnInit } from '@angular/core';
import {MediaServiceService} from '../media-service.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public mediaService: MediaServiceService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.mediaService.getUserData().subscribe(response => {
        this.router.navigate(['front']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }
}
