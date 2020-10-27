import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistgerRequestInteface } from 'src/app/auth/types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInteface } from 'src/app/auth/types/authResponse.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: RegistgerRequestInteface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseInteface>(url, data)
      .pipe(map((response: AuthResponseInteface) => response.user));
  }
}
