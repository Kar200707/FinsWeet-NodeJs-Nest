import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SubscribeDocument = Subscribe & Document

@Schema({ collection: 'subscribes' })
export class Subscribe {
  @Prop({required: true})
  email: string;
}

export const SubscribeSchema = SchemaFactory.createForClass(Subscribe);