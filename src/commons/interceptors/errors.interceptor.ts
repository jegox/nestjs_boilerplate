import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//# See more info https://docs.nestjs.com/interceptors#exception-mapping
@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        console.log({ err });

        //# The exception handler mapping the response with fields status <Boolean> false, message <String> Error description, and statusCode <Number> HTTP status code
        return throwError(
          new BadGatewayException({
            status: false,
            message: err.response,
            statusCode: err.status,
          }),
        );
      }),
    );
  }
}
