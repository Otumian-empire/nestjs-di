import { Injectable } from "@nestjs/common";
import { PowerService } from "src/power/power.service";

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log("making use of the power service");
    this.powerService.supplyPower(12);
    return "data";
  }
}
