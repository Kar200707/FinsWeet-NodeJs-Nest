import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { ContactUs, ContactUsDocument } from "./schemas/contact-us.schema";
import { Model } from "mongoose";

@Injectable()
export class ContactUsService {
  constructor(@InjectModel(ContactUs.name) private contactUsModel: Model<ContactUsDocument>) {  }


  async getAll(){
    const data = await this.contactUsModel.find()

    return data;
  }

  async create(body) {
    const createdData = await this.contactUsModel.create(body);

    return createdData;
  }
}
