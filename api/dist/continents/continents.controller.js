"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinentsController = void 0;
const common_1 = require("@nestjs/common");
const continents_service_1 = require("./continents.service");
let ContinentsController = class ContinentsController {
    constructor(continentsService) {
        this.continentsService = continentsService;
    }
    async getContinent(Code) {
        return this.continentsService.getContinentByCode(Code);
    }
    async getContinents() {
        return this.continentsService.getContinents();
    }
};
__decorate([
    (0, common_1.Get)(':Code'),
    __param(0, (0, common_1.Param)('Code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContinentsController.prototype, "getContinent", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContinentsController.prototype, "getContinents", null);
ContinentsController = __decorate([
    (0, common_1.Controller)('continents'),
    __metadata("design:paramtypes", [continents_service_1.ContinentsService])
], ContinentsController);
exports.ContinentsController = ContinentsController;
//# sourceMappingURL=continents.controller.js.map