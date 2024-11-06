import { Body, Controller, Get, Post } from "@nestjs/common";
import { PlayerService } from "./players.service";
import { Player } from "./interface/player.interface";
import { pseudoRandomBytes } from "crypto";
import { CreatePlayersDtos } from "./Dtos/create-players.dto";


@Controller("api/v1/players")
export class PlayersController{

    constructor(private readonly PlayerService:PlayerService){}

    @Post('/create')
    async PostPlayers(@Body() Player:CreatePlayersDtos){
        return await this.PlayerService.CreatePlayers(Player)
    }

    @Get('/All')
    async getAll(){
        return await this.PlayerService.ReturnPlayers()
    }
    
}