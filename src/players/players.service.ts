import { Injectable, Logger } from "@nestjs/common";
import { CreatePlayersDtos } from "./Dtos/create-players.dto";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class PlayerService{

    private readonly logger = new Logger(PlayerService.name)

    constructor(){}

    async CreatePlayers(CreatePlayersDtos: CreatePlayersDtos){
        const {name,phone,email}  = CreatePlayersDtos

        this.logger.log("Create a new player...")
        const player ={
            _id : uuidv4(),
            name,
            phone,
            email,
            ranking :"C",
            positionRanking: 1
        }
    }
}