import { FilterQuery, Model } from "mongoose";
import { Continent, ContinentDocument } from "./schemas/continent.schema";
export declare class ContinentsRepository {
    private continentModel;
    constructor(continentModel: Model<ContinentDocument>);
    findOne(continentFilterQuery: FilterQuery<Continent>): Promise<Continent>;
    find(continentsFilterQuery: FilterQuery<Continent>): Promise<Continent[]>;
}
