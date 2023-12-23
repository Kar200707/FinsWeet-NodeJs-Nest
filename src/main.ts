import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import { CategoryModule } from "./app/category/category.module";

async function bootstrap() {
  const app: any = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  const configService = app.get(ConfigService);
  const port:number = configService.get('port');

  await app.listen(port);
}
bootstrap();
