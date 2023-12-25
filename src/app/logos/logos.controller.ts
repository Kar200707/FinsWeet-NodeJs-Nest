import { Controller, Get } from "@nestjs/common";
import { LogosService } from "./logos.service";

@Controller('api/logos')
export class LogosController {
  constructor(private readonly logoService: LogosService) {  }

  @Get()
  getAll() {
    return this.logoService.getAll();
  }
}
