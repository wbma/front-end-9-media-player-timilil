import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class MediaServiceService {

  username: string;
  password: string;
  status: string;
  apiUrl: 'http://media.mw.metropolia.fi/wbma';
  moi: 'MOI';

  constructor(private http: HttpClient, private router: Router) {
  }

  public login() {
    console.log('uname: ' + this.username);
    console.log('pwd ' + this.password);

    const body = {
      username: this.username,
      password: this.password,
    };

    // this is optional
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    this.http.post('http://media.mw.metropolia.fi/wbma/login', body, settings).
      subscribe(response => {
        console.log(response['token']);
        localStorage.setItem('token', response['token']);
        this.router.navigate(['front']);
      }, (error: HttpErrorResponse) => {
        console.log(error.error.message);
        this.status = error.error.message;
      });
  }

  register(user) {
    return this.http.post('http://media.mw.metropolia.fi/wbma/users', user);
  }

  getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('token')),
    };

    return this.http.get('http://media.mw.metropolia.fi/wbma/users/user',
      settings);
  }

  getUploadData(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('token')),
    };

    return this.http.post('http://media.mw.metropolia.fi/wbma/media', formData,
      settings);
  }

  getNewFiles() {
    return this.http.get('http://media.mw.metropolia.fi/wbma/media?start=10&limit=10');
  }

  getFile() {
    return this.http.get('http://media.mw.metropolia.fi/wbma/media?start=0&limit=1');
  }

  getUserByID (id) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('token')),
    };
    return this.http.get('http://media.mw.metropolia.fi/wbma/users/' + id, settings);
  }

  getLikes(id) {
    return this.http.get('http://media.mw.metropolia.fi/wbma/favourites/file/' + id);
  }

  liked(){
    const settings = {
        headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('token')),
    };
    return this.http.get('http://media.mw.metropolia.fi/wbma/favorites', settings);
  }

}
