import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

//# See more info https://docs.nestjs.com/openapi/cli-plugin
export const SwaggerMockup = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('<Your api title>')
    .setDescription('<Your description api>')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  //# Set up documentation on localhost?[PORT]/api-docs
  SwaggerModule.setup('api-docs', app, document);
};
