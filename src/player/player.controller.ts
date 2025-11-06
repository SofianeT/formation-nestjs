import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('/all')
  getAllPlayers() {
    return this.playerService.getAllPlayers();
  }

  @Get('/all/team/:teamId')
  getPlayersByTeam(@Param('teamId', ParseIntPipe) teamId: number) {
    return this.playerService.getPlayersByTeam(teamId);
  }

  @Get('/all/position/:positionId')
  getPlayersByPosition(@Param('positionId', ParseIntPipe) positionId: number) {
    return this.playerService.getPlayersByPosition(positionId);
  }

  @Post('/create')
  createPlayer(@Body() data: CreatePlayerDto) {
    return this.playerService.createPlayer(data);
  }

  @Put('/:id')
  updatePlayer(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePlayerDto,
  ) {
    return this.playerService.updatePlayer(id, data);
  }

  @Delete('/:id')
  deletePlayer(@Param('id', ParseIntPipe) id: number) {
    return this.playerService.deletePlayer(id);
  }
}
