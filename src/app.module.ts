import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './app.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'cats'),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      // host: 'localhost',
      // port: 27017,
      url: 'mongodb+srv://illia:02122001@chat.kuc2705.mongodb.net/test',
      database: 'test',
      username: 'root',
      password: 'root',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
