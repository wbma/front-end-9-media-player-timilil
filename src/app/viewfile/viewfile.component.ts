import {Component, OnInit} from '@angular/core';
import {MediaServiceService} from '../media-service.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-viewfile',
  templateUrl: './viewfile.component.html',
  styleUrls: ['./viewfile.component.scss'],
})
export class ViewfileComponent implements OnInit {

  fileObject: any;
  user: any;
  likes: any;
  wholikes: any;

  constructor(private mediaService: MediaServiceService) {
  }

  getOneFile() {
    this.mediaService.getFile().subscribe(response => {
      this.fileObject = response[0];
      console.log(response[0]);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  getUser() {
    this.mediaService.getUserByID('55').subscribe(response => {
      console.log(response);
      this.user = response;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  getLikes(){
    this.mediaService.getLikes(1).subscribe(response => {
      console.log(response);
      this.likes = response;
    });
  }

  getWhoLiked(){
    this.mediaService.liked().subscribe(response => {
      console.log(response);
      this.wholikes = response;
    });
  }

  ngOnInit() {
    this.getOneFile();
    this.getUser();
    this.getLikes();
    this.getWhoLiked();
  }

}
