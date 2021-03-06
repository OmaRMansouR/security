import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { environment } from '@environments/environment';
//import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    //private currentUserSubject: BehaviorSubject<User>;
    //public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        //this.currentUser = this.currentUserSubject.asObservable();
    }

//    public get currentUserValue(): User {
//        return this.currentUserSubject.value;
//    }

    login(username: string, password: string) {
        return this.http.post<any>(`http://161.35.23.230:3000/login`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('isUser', 'true');
                localStorage.setItem('isAdmin', 'false');
                //this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        //this.currentUserSubject.next(null);
    }
}