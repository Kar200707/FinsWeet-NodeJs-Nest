import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ContactUsDocument = ContactUs & Document

@Schema({ collection: 'contact_us' })
export class ContactUs {
  @Prop({required: true})
  f_name: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  message: string;

  @Prop({required: true})
  county: string;
}

export const ContactUsSchema = SchemaFactory.createForClass(ContactUs);