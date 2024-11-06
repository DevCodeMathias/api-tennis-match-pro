import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { PlayersModule } from './players/players.module';


dotenv.config();


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://lauramathias03:claro5mathias@clustertenniapp.yihqa.mongodb.net/TennisApp?retryWrites=true&w=majority&appName=players",{
      connectionFactory: (connection) => {
        connection.on('connected',() =>{
          Logger.log('Successfully connected to MongoDB!', 'MongoDB')
        });
        connection.on('error',(err)=>{
          Logger.error('Failed to connect to MongoDB', err, 'MongoDB')
        });
        return connection
      }
    }),
    PlayersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
