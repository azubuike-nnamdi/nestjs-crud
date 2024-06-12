import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';

//tells nest that this is a module
@Module({
  controllers: [UsersController],
})
export class UsersModule {}
