import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Continent, ContinentSchema } from "./schemas/continent.schema";
import { ContinentsController } from "./continents.controller";
import { ContinentsRepository } from "./continents.repository";
import { ContinentsService } from "./continents.service";


@Module({
    imports: [MongooseModule.forFeature([{name: Continent.name, schema: ContinentSchema }])],
    controllers: [ContinentsController],
    providers: [ContinentsService, ContinentsRepository]
})
export class ContinentsModule {} 