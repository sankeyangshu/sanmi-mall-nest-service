import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        // 文件上传的地址
        destination: path.join(__dirname, '../uploads'),
        filename: (_, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileExtName = path.extname(file.originalname);
          callback(null, `${name}${fileExtName}`);
        },
      }),
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
