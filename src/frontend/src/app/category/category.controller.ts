import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryDocument } from "./schemas/category.schema";
import { Model } from "mongoose";

@Controller('api')
export class CategoryController {
  constructor(private category: CategoryService) {}

  @Get('category')
  getAll(@Query() query) {
    return this.category.getAll(query);
  }

  @Get('category/:id')
  getOne(@Param('id') id){
    return this.category.getOne(id);
  }

  @Post('category')
  create(@Body() body){
    return this.category.create(body);
  }

  @Put('category/:id')
  update(@Param('id') id, @Body() body){
    return this.category.update(id, body);
  }

  @Delete('category/:id')
  remove(@Param('id') id){
    return this.category.remove(id);
  }
}
