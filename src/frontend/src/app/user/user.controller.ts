import { Body, Controller, Delete, Get, Param, Put, Query } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {  }

  @Get()
  getAll(@Query() query){
    return this.userService.getAll(query);
  }

  @Get('/:id')
  getOne(@Param('id') id: string){
    return this.userService.getOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() body){
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  remove(@Param('id') id: string){
    return this.userService.remove(id);
  }
}
