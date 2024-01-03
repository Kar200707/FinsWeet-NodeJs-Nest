import { Body, Controller, Get, Post } from "@nestjs/common";
import { SubscribeService } from "./subscribe.service";

@Controller('api/subscribe')
export class SubscribeController {
  constructor(private readonly sunService: SubscribeService) {  }

  @Get()
  getAll() {
    return this.sunService.getAll();
  }

  @Post()
  create(@Body() body){
    return this.sunService.create(body);
  }
}