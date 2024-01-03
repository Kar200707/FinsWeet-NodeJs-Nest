import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PostDocument = Post & Document

@Schema({ collection: 'posts' })
export class Post {
  @Prop({required: true})
  title: string;

  @Prop({required: true})
  image: string;

  @Prop({required: true})
  user_id: string;

  @Prop({required: true})
  category_icon: string;

  @Prop({required: true})
  category: string;

  @Prop({required: true})
  shortDescription: string;

  @Prop({required: true})
  created_date: string;

  @Prop({required: true})
  description: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);