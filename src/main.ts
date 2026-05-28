import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('My API description')
    .setVersion('1.0')
    .build();
  const swagger = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup('api', app, swagger);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
  