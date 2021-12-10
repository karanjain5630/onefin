import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private loginService:LoginService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token  = this.loginService.getToken();
        
        let authReq = req;
        if(token!=null){
                authReq=authReq.clone({setHeaders:{
                    Authorization : `Token ${token}`
                }})
        }
        return next.handle(authReq);
    }
    
}
export const AuthInterceptorProvider = [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
}]