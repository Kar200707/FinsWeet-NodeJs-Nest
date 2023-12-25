import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { PostService } from "./post.service";

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService) {  }

  @Get()
  getAll(@Query() query) {
    return this.postService.getAll(query);
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.postService.getOne(id)
  }

  @Put('/:id')
  update(@Param('id') id:string, @Body() body){
    return this.postService.update(id, body);
  }

  @Post()
  create(@Body() body){
    return this.postService.create(body);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
