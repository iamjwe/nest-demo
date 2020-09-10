import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function initSwagger(app){
  const options = new DocumentBuilder()
  .addBearerAuth()// 开启 BearerAuth 授权认证
  .setTitle('api document for user-group')
  .setDescription('用户管理系统的api文档')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}