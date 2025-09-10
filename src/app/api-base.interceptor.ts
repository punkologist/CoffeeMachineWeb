import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';

const API_BASE_URL = 'https://dm-coffeemachine-tst-bncpfja6h7gbehgk.australiasoutheast-01.azurewebsites.net';

export const apiBaseInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('apiBaseInterceptor called for URL:', req.url);
  if (req.url.startsWith('/api/')) {
    const newUrl = API_BASE_URL + req.url.substring(4);
    console.log('Rewriting URL to:', newUrl);
    const apiReq = req.clone({ url: newUrl });
    return next(apiReq);
  }
  return next(req);
};
