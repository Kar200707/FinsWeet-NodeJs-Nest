import { Module } from '@nestjs/common';
import { LogosService } from './logos.service';
import { LogosController } from './logos.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Logo, LogoSchema } from "./schemas/logo.schema";

@Module({
  providers: [LogosService],
  controllers: [LogosController],
  imports: [
    MongooseModule.forFeature([
      {name: Logo.name, schema: LogoSchema}
    ])
  ]
})
export class LogosModule {}
