import { Continent } from "./schemas/continent.schema";
import { ContinentsRepository } from "./continents.repository";
export declare class ContinentsService {
    private readonly continentsRepository;
    constructor(continentsRepository: ContinentsRepository);
    getContinentByCode(Code: string): Promise<Continent>;
    getContinents(): Promise<Continent[]>;
}
