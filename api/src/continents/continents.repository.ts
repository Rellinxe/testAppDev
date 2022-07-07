import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Continent, ContinentDocument } from "./schemas/continent.schema";

@Injectable()
export class ContinentsRepository {
    constructor(@InjectModel(Continent.name) private continentModel: Model<ContinentDocument>) {}

    async findOne(continentFilterQuery: FilterQuery<Continent>): Promise<Continent> {
        return this.continentModel.findOne(continentFilterQuery);
    } 

    async find(continentsFilterQuery: FilterQuery<Continent>): Promise<Continent[]> {
        return this.continentModel.find(continentsFilterQuery)
    } 
}

