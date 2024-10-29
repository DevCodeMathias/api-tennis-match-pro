import { Module } from "@nestjs/common";
import { PlayersController } from "./players.controller";
import { PlayerService } from "./players.service";


@Module({
    imports:[],
    providers:[PlayerService],
    controllers:[ PlayersController],
    exports:[]
})
export class playersModules{}
