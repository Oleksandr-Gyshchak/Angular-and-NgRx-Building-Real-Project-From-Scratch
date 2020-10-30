import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponseInteface } from 'src/app/auth/types/authResponse.interface';
import { LoginRequestInteface } from 'src/app/auth/types/loginRequest.interface';
import { RegistgerRequestInteface } from 'src/app/auth/types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInteface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegistgerRequestInteface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseInteface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInteface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponseInteface>(url, data)
      .pipe(map(this.getUser));
  }
}
