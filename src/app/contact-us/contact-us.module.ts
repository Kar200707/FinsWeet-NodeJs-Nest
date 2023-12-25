import { Module } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { ContactUsController } from './contact-us.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { ContactUs, ContactUsSchema } from "./schemas/contact-us.schema";

@Module({
  providers: [ContactUsService],
  controllers: [ContactUsController],
  imports: [
    MongooseModule.forFeature([
      {name: ContactUs.name, schema: ContactUsSchema}
    ])
  ]
})
export class ContactUsModule {}
