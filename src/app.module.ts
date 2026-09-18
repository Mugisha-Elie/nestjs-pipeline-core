import { Module } from "@nestjs/common";
import { PipelineLabController } from "./pipeline-lab.controller";

@Module({
  imports: [],
  controllers: [PipelineLabController],
  providers: []
})

export class AppModule {}