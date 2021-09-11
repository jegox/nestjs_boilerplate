import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IUser } from 'src/commons/interfaces';
import { CreateUser } from '../../commons/dto/user.dto';

import { UserService } from '../../services/user/user.service';

@ApiTags('USERS')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create user' })
  async create(@Body() user: CreateUser): Promise<IUser> {
    return await this.userService.push(user);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List of users' })
  async users(): Promise<any[]> {
    return await this.userService.all();
  }
}
