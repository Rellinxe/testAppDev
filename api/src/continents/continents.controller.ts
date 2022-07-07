import { Controller, Get, Param} from '@nestjs/common';
import { Continent } from "./schemas/continent.schema";
import { ContinentsService } from './continents.service';

@Controller('continents')
export class ContinentsController {
    constructor(private readonly continentsService: ContinentsService) {}

    @Get(':Code')
    async getContinent(@Param('Code') Code: string): Promise<Continent> {
        return this.continentsService.getContinentByCode(Code);
    }

    @Get()
    async getContinents(): Promise<Continent[]> {
            return this.continentsService.getContinents();
    }

}
