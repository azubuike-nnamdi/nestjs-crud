import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createuser.dto';

@Controller('users') //users is the api route
export class UsersController {
  @Get()
  getUsers() {
    return {
      username: 'user',
      email: 'user@example.com',
    };
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'XXXX',
        email: 'user@example.com',
        post: [
          {
            title: 'Post 1',
            content: 'Content 1',
          },
        ],
      },
    ];
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
  }
}
