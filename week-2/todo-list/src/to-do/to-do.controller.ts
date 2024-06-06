import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { CreateToDoDto } from './dto/create-to-do.dto';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  create(@Body() createToDoDto: CreateToDoDto) {
    return this.toDoService.create(createToDoDto);
  }

  @Get()
  findAll(@Param('title') title: string) {
    return this.toDoService.findAll(title);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.toDoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateToDoDto: UpdateToDoDto) {
    return this.toDoService.update(id, updateToDoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toDoService.remove(+id);
  }
}
