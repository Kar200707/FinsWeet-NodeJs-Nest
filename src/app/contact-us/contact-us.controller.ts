import { Body, Controller, Get, Post } from "@nestjs/common";
import { ContactUsService } from "./contact-us.service";

@Controller('api/contact-us')
export class ContactUsController {
  constructor(private readonly contctUsService: ContactUsService) {  }


  @Get()
  getAll(){
    return this.contctUsService.getAll();
  }

  @Post()
  create(@Body() body) {
    return this.contctUsService.create(body);
  }
}
