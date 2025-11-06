import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
  constructor(private readonly prisma: PrismaService) {}

  getAllPlayers() {
    return this.prisma.player.findMany();
  }

  getPlayersByTeam(teamId: number) {
    return this.prisma.player.findMany({
      where: { teamId },
    });
  }

  getPlayersByPosition(positionId: number) {
    return this.prisma.player.findMany({
      where: { positionId },
    });
  }

  async createPlayer(data: CreatePlayerDto) {
    return this.prisma.player.create({
      data,
    });
  }

  async updatePlayer(id: number, data: UpdatePlayerDto) {
    const player = await this.prisma.player.findUnique({
      where: { id },
    });
    if (!player) {
      throw new Error('Player not found');
    }
    return this.prisma.player.update({
      where: { id },
      data,
    });
  }

  async deletePlayer(id: number) {
    const player = await this.prisma.player.findUnique({
      where: { id },
    });
    if (!player) {
      throw new Error('Player not found');
    }
    return this.prisma.player.delete({
      where: { id },
    });
  }
}
