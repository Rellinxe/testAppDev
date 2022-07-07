import { Injectable } from "@nestjs/common";
import { Continent } from "./schemas/continent.schema";
import { ContinentsRepository } from "./continents.repository";

@Injectable()
export class ContinentsService {
    constructor(private readonly continentsRepository: ContinentsRepository) {}

    async getContinentByCode(Code: string): Promise<Continent> {
        return this.continentsRepository.findOne({Code })
    }

    async getContinents(): Promise<Continent[]> {
        return this.continentsRepository.find({});
    } 

}
