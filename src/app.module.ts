import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { config } from "./config/config";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryModule } from "./app/category/category.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src/frontend/dist'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    MongooseModule.forRoot(process.env.DB_URI),

    // api modules

    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
