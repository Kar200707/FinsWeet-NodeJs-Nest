import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type privacyPolicesDocument = privacyPolices & Document

@Schema({ collection: 'privacy_policies' })
export class privacyPolices {
  @Prop({required: true})
  last_update: string;

  @Prop({required: true})
  texts: [
    {
      title: string,
      text: string
    },
    {
      title: string,
    }
  ];
}

export const privacyPolicesSchema = SchemaFactory.createForClass(privacyPolices);