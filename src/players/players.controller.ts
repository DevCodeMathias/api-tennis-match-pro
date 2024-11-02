import { Controller } from "@nestjs/common";
import { PlayerService } from "./players.service";
import { Player } from "./interface/player.interface";


@Controller("api/v1/players")
export class PlayersController{

    constructor(private readonly PlayerService:PlayerService){}

    // async getPlayers(): Promise<Player[]>{
        
    // }
}