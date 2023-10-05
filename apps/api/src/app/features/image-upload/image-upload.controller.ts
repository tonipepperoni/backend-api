import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CurrentUser, RequestUser, RolesGuard } from '@zen/nest-auth';

import { PrismaService } from '../prisma';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { extname } from "@angular-devkit/core";

@Controller()
@UseGuards(RolesGuard(''))
export class ImageUploadController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './apps/api/src/uploads'
      , filename: (req, file, cb) => {
        // Generating a 32 random chars long string
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        //Calling the callback passing the random name generated with the original extension name
        // @ts-ignore
        cb(null, `${randomName}${extname(file.originalname)}`)
      }
    })
  }))
  async uploadFile(@CurrentUser()  user: RequestUser, @UploadedFile()  file: Express.Multer.File) {
    try {
      //
       console.log(user, file)
      // const uploadPath = path.join(__dirname, '../../../apps/api/src/uploads'); // Define your upload path
      // const fileName = `${uuid4()}.png`;
      //
      // // Save file to the file system
      // const writeStream = createWriteStream(filePath);
      // writeStream.write(file.buffer);
      //
       const filePathUrl = `uploads/${file.filename}`; // Relative path for the database

      // Create a database record for the file
      const uploadedFile = await this.prisma.fileUpload.create({
        data: {
          type: file.mimetype,
          filePathUrl: filePathUrl,
          authorId: user.id
          // Add other fields as needed
        },
      });
      // You can update the database with the filePathUrl
      // Prisma update operation goes here

      return {filePathUrl}; // Return the file path for response
    }catch (e) {
      console.log(e)
    }
  }
  // @Get('meta')
  // @Header('Content-Type', 'text/plain')
  // async meta() {
  //   let result = '';

  //   Prisma.dmmf.datamodel.models.forEach(model => {
  //     result += '\n' + model.name + '\n';
  //     model.fields.forEach(field => {
  //       result += `  ${field.name}: ${field.type}${field.isList ? '[]' : ''}\n`;
  //     });
  //   });

  //   Logger.log(result);
  //   return result;
  // }
}
