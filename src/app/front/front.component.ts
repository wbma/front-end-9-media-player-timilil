import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaServiceService} from '../media-service.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
})
export class FrontComponent implements OnInit {

  filesArray: any;
  imgFolder: 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(
    private mediaService: MediaServiceService, private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.mediaService.getUserData().subscribe(response => {
        console.log('Welcome ' + response['full_name']);
        this.mediaService.getNewFiles().subscribe(response => {
          console.log(response);
          this.filesArray = response;
        });
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.router.navigate(['login']);
      });
    } else {
      this.router.navigate(['login']);
    }
  }

}
