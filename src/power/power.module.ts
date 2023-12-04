import { Module } from "@nestjs/common";

import { PowerService } from "./power.service";

@Module({
  providers: [PowerService],
  exports: [PowerService], // so that others can use it
})
export class PowerModule {}
