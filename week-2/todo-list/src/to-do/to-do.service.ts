import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { CreateToDoDto } from './dto/create-to-do.dto';

@Injectable()
export class ToDoService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createToDoDto: CreateToDoDto) {
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

  async findOne(idOrTitle: string) {
    // Check if idOrTitle can be parsed into an integer
    const intId = parseInt(idOrTitle, 10);
    if (!isNaN(intId)) {
      // If intId is a valid number, perform ID lookup
      return this.databaseService.toDo.findUnique({
        where: {
          id: intId,
        },
      });
    } else {
      // Otherwise, treat it as a title search
      return this.databaseService.toDo.findMany({
        where: {
          title: {
            contains: idOrTitle,
            mode: 'insensitive',
          },
        },
      });
    }
  }

  async update(id: string, updateToDoDto: UpdateToDoDto) {
    return this.databaseService.toDo.update({
      where: {
        id: parseInt(id, 10),
      },
      data: updateToDoDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.toDo.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
  }
}
