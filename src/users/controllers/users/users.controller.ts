import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
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

  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    return response.send('User created');
  }
}
