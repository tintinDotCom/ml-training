import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { BorrowingsController } from './borrowings/borrowings.controller';
import { BorrowingsService } from './borrowings/borrowings.service';

@Module({
  imports: [DatabaseModule, UsersModule, BooksModule],
  controllers: [AppController, BorrowingsController],
  providers: [AppService, BorrowingsService],
})
export class AppModule {}
