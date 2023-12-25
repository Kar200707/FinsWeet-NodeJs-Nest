import { Body, Controller, Post } from "@nestjs/common";
import { RegisterService } from "./register.service";

@Controller('api/register')
export class RegisterController {

  constructor(private readonly regService: RegisterService) {  }

  @Post()
  register(@Body() body) {
    return this.regService.register(body)
  }

}
