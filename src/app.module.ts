import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';
import { UserController } from './controllers/user/user.controller';

//# The Services Module groups all the services to be used in the application,
//# this avoids being importing providers in the controllers that need more than one service
@Module({
  imports: [ServicesModule],
  controllers: [UserController],
  providers: [ServicesModule],
})
export class AppModule {}
