import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/createuser.dto';

@Controller('users') //users is the api route
export class UsersController {
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortBy: boolean) {
    console.log(sortBy);
  }
  // @Get()
  // getUsers() {
  //   return {
  //     username: 'user',
  //     email: 'user@example.com',
  //   };
  // }

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
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}
