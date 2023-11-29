require('dotenv').config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { dirname } from 'path';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.development.env',}),
    TypeOrmModule.forRoot({
      type : 'mysql',
      database : process.env.DB_DATABASE,
      host  : process.env.DB_HOST,
      port : Number(process.env.DB_PORT),
      username : process.env.DB_USERNAME,
      password : process.env.DB_PASSWORD,
      entities : [`${__dirname}/**/*.entity{.js,.ts}`],
      dropSchema : false,
      synchronize :false
    })
    ,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
