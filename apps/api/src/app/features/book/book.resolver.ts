import {Resolver, Mutation, Args, Parent, ResolveField, Query} from '@nestjs/graphql';
import {BookCreateInput} from "../prisma/generated";
import {Book} from "../prisma/generated";
import {BookUpdateInput} from "../prisma/generated";
import {BookService} from "./book.service";

@Resolver((of: any) => Book)
export class BookResolver {
  constructor(private readonly service: BookService) {
  }

  @Mutation(returns => Book)
  async create(@Args('data') data: BookCreateInput) {
    const bookCreated = await this.service.createBook(data);
    return bookCreated;
  }

  @Mutation(returns => Book)
  async update(@Args('data') data: BookUpdateInput, @Args('id') bookId: string) {
    const bookUpdated = await this.service.updateBook(bookId, data);
    return bookUpdated;
  }

  @Mutation((returns) => Book)
  async delete(@Args('id') bookId: string) {
    const bookDeleted = await this.service.deleteBook(bookId);
    return bookDeleted;
  }

  @Query((returns) => Book)
  async find(@Args("bookId") bookId: string) {
    const bookFound = await this.service.findBook(bookId);
    return bookFound
  }

  @Query(() => [Book])
  async getAll() {
    return [];
  }
}
