import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema({ collection: 'users' })
export class User {
  @Prop({required: true})
  name: string;

  @Prop({required: true})
  image: string;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  title: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  bio: string;

  @Prop({required: true})
  facebook: string;

  @Prop({required: true})
  instagram: string;

  @Prop({required: true})
  superAdmin: string;

  @Prop({required: true})
  password: string;

  @Prop({required: true})
  linkedin: string;

  @Prop({required: true})
  twitter: string;
}

export const UserSchema = SchemaFactory.createForClass(User);