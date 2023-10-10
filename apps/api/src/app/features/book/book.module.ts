import { BookResolver } from './book.resolver';
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma';
import {BookService} from "./book.service";

@Module({
    providers: [BookResolver, BookService, PrismaService],
    exports: [BookService, BookResolver],
})
export class BookModule {}
