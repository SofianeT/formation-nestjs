import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Body,
  Delete,
  Post,
} from '@nestjs/common';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get('/all')
  getAllPositions() {
    return this.positionService.getAllPositions();
  }

  @Get('/:id')
  getOnePosition(@Param('id', ParseIntPipe) id: number) {
    return this.positionService.getOnePosition(id);
  }

  @Post('/create')
  createPosition(@Body() data: any) {
    return this.positionService.createPosition(data);
  }

  @Put('/:id')
  updatePosition(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any, // Replace 'any' with the actual DTO
  ) {
    return this.positionService.updatePosition(id, data);
  }

  @Delete('/:id')
  deletePosition(@Param('id', ParseIntPipe) id: number) {
    return this.positionService.deletePosition(id);
  }
}
