import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = localStorage.getItem('biggmall_token');

  let request = req


  if(authToken) {
    request = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    })
  }

  return next(request);
};
