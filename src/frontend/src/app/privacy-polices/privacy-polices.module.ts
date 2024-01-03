import { Module } from '@nestjs/common';
import { PrivacyPolicesService } from './privacy-polices.service';
import { PrivacyPolicesController } from './privacy-polices.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { privacyPolices, privacyPolicesSchema } from "./schemas/privacy-polices.schema";

@Module({
  providers: [PrivacyPolicesService],
  controllers: [PrivacyPolicesController],
  imports: [
    MongooseModule.forFeature([
      {name: privacyPolices.name, schema: privacyPolicesSchema}
    ])
  ]
})
export class PrivacyPolicesModule {}
