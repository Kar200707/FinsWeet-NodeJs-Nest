import { Module } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { SubscribeController } from "./subscribe.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Subscribe, SubscribeSchema } from "./schemas/sub.schema";

@Module({
  providers: [SubscribeService],
  controllers: [SubscribeController],
  imports: [
    MongooseModule.forFeature([
      {name: Subscribe.name, schema: SubscribeSchema}
    ])
  ]
})
export class SubscribeModule {}
