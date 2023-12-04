import { Injectable } from "@nestjs/common";
import { PowerService } from "src/power/power.service";

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    const watts = a + b;
    this.powerService.supplyPower(watts);
    return watts;
  }
}
