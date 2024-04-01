import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('api/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  signIn(@Body() body) {
    return this.loginService.signIn(body);
  }
}
