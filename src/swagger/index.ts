/**
 * swagger配置文件
 */
import type { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * @description: 设置swagger
 * @param {NestExpressApplication} app 应用程序
 */
export const setupSwagger = (app: NestExpressApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('三米商城')
    .setDescription('sanmi-mall-nest-service 接口文档')
    .setVersion('v0.0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/swagger', app, document);
};
