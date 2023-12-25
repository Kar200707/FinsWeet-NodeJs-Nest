import { Body, Controller, Get, Put } from "@nestjs/common";
import { PrivacyPolicesService } from "./privacy-polices.service";

@Controller('api/privacy-policy')
export class PrivacyPolicesController {
  constructor(private readonly privacyPolicyService: PrivacyPolicesService) {  }

  @Get()
  getAll() {
    return this.privacyPolicyService.getAll();
  }

  @Put()
  update(@Body() body){
    return this.privacyPolicyService.update(body);
  }
}
