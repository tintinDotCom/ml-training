import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: DatabaseService) {}
  create(createBookDto: CreateBookDto) {
    return this.prisma.books.create({
      data: createBookDto,
    });
  }

  findAll() {
    return this.prisma.books.findMany();
  }

  findOne(id: number) {
    return this.prisma.books.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.books.update({
      where: {
        id,
      },
      data: updateBookDto,
    });
  }

  remove(id: number) {
    return this.prisma.books.delete({
      where: {
        id,
      },
    });
  }
}
