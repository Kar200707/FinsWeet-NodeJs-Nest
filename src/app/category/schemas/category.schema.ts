import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CategoryDocument = Category & Document

@Schema({ collection: 'categories' })
export class Category {
  @Prop({required: true})
  title: string;

  @Prop({required: true})
  image: string;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  shortDescription: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);