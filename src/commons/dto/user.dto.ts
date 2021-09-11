import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUser {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  occupation: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
