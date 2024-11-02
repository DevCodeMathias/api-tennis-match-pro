import { Module } from "@nestjs/common";
import { PlayersController } from "./players.controller";
import { PlayerService } from "./players.service";
import { MongooseModule } from "@nestjs/mongoose";
import { playerSchema } from "./interface/players.schema";



@Module({
    imports:[MongooseModule.forFeature([{name:'players',schema:playerSchema}])],
    providers:[PlayerService],
    controllers:[ PlayersController],
    exports:[]
})
export class playersModules{}
