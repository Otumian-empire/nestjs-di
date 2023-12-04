import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";

import { ComputerModule } from "./computer/computer.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ComputerModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
