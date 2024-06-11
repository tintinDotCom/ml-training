import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Borrowing, Prisma } from '@prisma/client';

@Injectable()
export class BorrowingsService {
  constructor(private prisma: DatabaseService) {}

  async borrowBook(
    userId: number,
    bookId: number,
    dueDate: Date,
  ): Promise<Borrowing> {
    // Ensure the book is available
    const book = await this.prisma.books.findUnique({
      where: { id: bookId },
    });

    if (!book || !book.available) {
      throw new Error('Book is not available');
    }

    // Create borrowing record
    const borrowing = await this.prisma.borrowing.create({
      data: {
        userId,
        bookId,
        dueDate,
      },
    });

    // Mark the book as unavailable
    await this.prisma.books.update({
      where: { id: bookId },
      data: { available: false },
    });

    return borrowing;
  }

  async returnBook(userId: number, bookId: number): Promise<Borrowing> {
    // Find the borrowing record
    const borrowing = await this.prisma.borrowing.findFirst({
      where: { userId, bookId, returned: false },
    });

    if (!borrowing) {
      throw new Error('Borrowing record not found');
    }

    // Update the borrowing record
    const updatedBorrowing = await this.prisma.borrowing.update({
      where: { id: borrowing.id },
      data: { returned: true },
    });

    // Mark the book as available
    await this.prisma.books.update({
      where: { id: bookId },
      data: { available: true },
    });

    return updatedBorrowing;
  }
}
