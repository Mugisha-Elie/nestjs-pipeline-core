import { Controller, Get, Post, Put, Delete, Param, Query, Body, Headers, HttpCode, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";

@Controller('lab')
export class PipelineLabController {
  @Get('ping')
  getPing(): { status: string; timestamp: number } {
    return {
      status: 'pong',
      timestamp: Date.now()
    };
  }

  @Get('items/:id')
  getItem(
    @Param('id') id: string,
    @Query('verbose') verbose?: string,
  ): { itemId: string; verboseMode: boolean } {
    return {
      itemId: id,
      verboseMode: verbose === 'true'
    }
  }

  @Post('echo')
  @HttpCode(200)
  echoPayload(
    @Body() payload: Record<string, unknown>,
    @Headers('user-agent') userAgent: string,
  ): { received: Record<string, unknown>; clientAgent: string }{
    return {
      received: payload,
      clientAgent: userAgent
    };
  }


  @Get('custom-header')
  sendWithCustomHeader(
    @Res({ passthrough: true }) res: Response
  ): { message: string } {
    res.setHeader('X-Engine-Mode', 'BareMetal-FirstPrinciples');
    return {message: 'Custom header dispatched successfully'}
  }
}