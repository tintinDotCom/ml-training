import { Controller, Post, Param, Body } from '@nestjs/common';
import { BorrowingsService } from './borrowings.service';

@Controller('borrowings')
export class BorrowingsController {
  constructor(private readonly borrowingsService: BorrowingsService) {}

  @Post('borrow')
  async borrowBook(
    @Body() borrowDto: { userId: number; bookId: number; dueDate: Date },
  ) {
    return this.borrowingsService.borrowBook(
      borrowDto.userId,
      borrowDto.bookId,
      borrowDto.dueDate,
    );
  }

  @Post('return')
  async returnBook(@Body() returnDto: { userId: number; bookId: number }) {
    return this.borrowingsService.returnBook(
      returnDto.userId,
      returnDto.bookId,
    );
  }
}
