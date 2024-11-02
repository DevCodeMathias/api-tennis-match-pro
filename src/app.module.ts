import { Module } from '@nestjs/common';
import { playersModules } from './players/players.module';
import { MongooseModule } from '@nestjs/mongoose';
import dotenv from 'dotenv'

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI)
    ,
    playersModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
