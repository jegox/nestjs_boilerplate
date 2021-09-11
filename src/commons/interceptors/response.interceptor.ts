import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//# See more info https://docs.nestjs.com/interceptors#response-mapping
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<any>> {
    //# The handler mapping the response with fields status <Boolean> true, data <Array | Object>.
    return next.handle().pipe(map((data) => ({ status: true, data })));
  }
}

export interface Response<T> {
  data: T;
}
