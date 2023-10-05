import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma';
import { ImageUploadController } from "./image-upload.controller";
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from "path"


@Module({
  imports: [PrismaModule,
    MulterModule.register({
      dest: './uploads', // Specify the upload destination
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'apps/api/src/uploads'), // Specify the upload directory path
      serveRoot: '/uploads', // Specify the base path for serving files
    }),
  ],
  providers: [],
  exports: [],
  controllers: [ImageUploadController],
})
export class ImageUploadModule {}

