import { Continent } from "./schemas/continent.schema";
import { ContinentsService } from './continents.service';
export declare class ContinentsController {
    private readonly continentsService;
    constructor(continentsService: ContinentsService);
    getContinent(Code: string): Promise<Continent>;
    getContinents(): Promise<Continent[]>;
}
