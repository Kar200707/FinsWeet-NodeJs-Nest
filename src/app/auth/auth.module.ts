import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { RegisterController } from './register/register.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ])
  ],
  controllers: [LoginController, RegisterController],
  providers: [LoginService, RegisterService]
})
export class AuthModule {}
