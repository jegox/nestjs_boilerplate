import { Injectable } from '@nestjs/common';
import { IUser } from '../../commons/interfaces';

@Injectable()
export class UserService {
  private dummyUsers = [
    {
      name: 'Jhon due',
      occupation: 'Engineer',
      email: 'jhon.due@mail.com',
    },
    {
      name: 'Marc Stu',
      occupation: 'Assitant',
      email: 'marc.stu@mail.com',
    },
    {
      name: 'Danna Ocean',
      occupation: 'Accountant',
      email: 'danna.ocean@mail.com',
    },
  ];

  //# Set up your data layer (MongoDB, MySQL, SQL Server, PostgreSQL, SQLite, etc.)
  //# constructor() {}

  async all(): Promise<IUser[]> {
    return this.dummyUsers;
  }

  async push(user: IUser): Promise<IUser> {
    this.dummyUsers.push(user);
    return user;
  }

  async find(email: string): Promise<IUser> {
    return this.dummyUsers.find((user) => user.email === email);
  }
}
