import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { config } from "./config/config";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryModule } from "./app/category/category.module";
import { AuthModule } from "./app/auth/auth.module";
import { PostModule } from "./app/post/post.module";
import { UserModule } from "./app/user/user.module";
import { SubscribeModule } from "./app/subscribe/subscribe.module";
import { PrivacyPolicesModule } from "./app/privacy-polices/privacy-polices.module";
import { LogosModule } from "./app/logos/logos.module";
import { ContactUsModule } from "./app/contact-us/contact-us.module";

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

    AuthModule,
    CategoryModule,
    PostModule,
    UserModule,
    SubscribeModule,
    PrivacyPolicesModule,
    LogosModule,
    ContactUsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
