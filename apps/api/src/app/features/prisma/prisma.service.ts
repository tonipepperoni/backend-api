import { Injectable, Optional } from '@nestjs/common';

import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(@Optional() options?: Prisma.PrismaClientOptions) {
    super(options);
  }
}
