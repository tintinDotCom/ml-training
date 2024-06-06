import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { CreateToDoDto } from './dto/create-to-do.dto';

@Injectable()
export class ToDoService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createToDoDto: CreateToDoDto) {
    // if (
    //   typeof createToDoDto.title !== 'string' ||
    //   createToDoDto.title.trim() === ''
    // ) {
    //   return 'Title must not be empty';
    // }
    // if (
    //   typeof createToDoDto.description !== 'string' ||
    //   createToDoDto.description.trim() === ''
    // ) {
    //   return 'Description must not be empty';
    // }

    return this.databaseService.toDo.create({
      data: {
        title: createToDoDto.title,
        description: createToDoDto.description,
        completed: createToDoDto.completed || false,
        due: createToDoDto.due,
      },
    });
  }

  async findAll(title: string) {
    return this.databaseService.toDo.findMany({
      where: {
        title,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.toDo.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateToDoDto: UpdateToDoDto) {
    return this.databaseService.toDo.update({
      where: {
        id,
      },
      data: updateToDoDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.toDo.delete({
      where: {
        id,
      },
    });
  }
}
