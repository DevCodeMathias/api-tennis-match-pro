import { Module } from "@nestjs/common";
import { PlayersController } from "./players.controller";
import { PlayerService } from "./players.service";
import { MongooseModule } from "@nestjs/mongoose";
import { playerSchema } from "./interface/players.schema";



@Module({
    imports:[MongooseModule.forFeature([{name:'Player',schema:playerSchema}])],
    providers:[PlayerService],
    controllers:[ PlayersController],
    exports:[PlayerService]
})
export class PlayersModule{}
