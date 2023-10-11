import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../prisma';
import {BookCreateInput} from "../prisma/generated";
import {BookUpdateInput} from "../prisma/generated";

@Injectable()
export class BookService {
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async createBook(payload: BookCreateInput): Promise<any> {
    try {
      return await this.prisma.book.create({
        data: {
          ...payload
        },
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async updateBook(bookId: string, newUserData: BookUpdateInput) {
    const book = await this.prisma.book.findUnique({where: {id: bookId}});

    if (!book) {
      throw new NotFoundException(`No $book found for id `);
    }
    return this.prisma.book.update({
      data: newUserData,
      where: {
        id: bookId,
      },
    });
  }

  async deleteBook(bookId: string) {
    const book = await this.prisma.book.findUnique({where: {id: bookId}});

    if (!book) {
      throw new NotFoundException(`No $book found for id `);
    }
    return this.prisma.book.delete({
      where: {
        id: bookId,
      },
    });
  }

  async findBook(bookId: string) {
    const book = await this.prisma.book.findUnique({where: {id: bookId}});

    if (!book) {
      throw new NotFoundException(`No $book found for id `);
    }
    return this.prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });
  }
}
