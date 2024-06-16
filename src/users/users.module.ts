import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

//tells nest that this is a module
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
