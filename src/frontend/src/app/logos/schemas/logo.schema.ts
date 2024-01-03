import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LogoDocument = Logo & Document

@Schema({ collection: 'logos' })
export class Logo {
  @Prop({required: true})
  logo1: string;

  @Prop({required: true})
  logo2: string;

  @Prop({required: true})
  logo3: string;

  @Prop({required: true})
  logo4: string;

  @Prop({required: true})
  logo5: string;
}

export const LogoSchema = SchemaFactory.createForClass(Logo);