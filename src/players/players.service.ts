import { HttpException, Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { CreatePlayersDtos } from "./Dtos/create-players.dto";
import { v4 as uuidv4 } from "uuid";
import { InjectModel } from "@nestjs/mongoose";
import { Player } from "./interface/player.interface";
import { Model } from "mongoose";

@Injectable()
export class PlayerService{

    private readonly logger = new Logger(PlayerService.name)

    constructor(@InjectModel('Player')
        private readonly PlayerModel:Model<Player>
    ){}

    async CreatePlayers(CreatePlayersDtos: CreatePlayersDtos):Promise<Player>{
         
        try{
            this.logger.log("Create a new player...")

            const createdPlayer = new this.PlayerModel(CreatePlayersDtos)

            this.logger.log(`creating player ${JSON.stringify(createdPlayer)}`)
            return await createdPlayer.save()
         }catch(error){
            this.logger.error(error)
            throw new  InternalServerErrorException("internal  erro")
        }
    }


    async ReturnPlayers():Promise<Player[]>{
        try{
            const players = await this.PlayerModel.find().exec(); 
            this.logger.log(`Found ${players.length} players`);
            
            return players;
        }catch(err){
            this.logger.error(err)
            throw new  InternalServerErrorException("internal  erro")
        }
    }
}