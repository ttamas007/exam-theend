import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const requestWithHeader = req.clone({
      headers        : req.headers.set('X-Requested-With', 'XMLHttpRequest'),
      withCredentials: true,
    });

    return next.handle(requestWithHeader);
  }
}
