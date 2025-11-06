import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTeamDTO } from './dto/create-team.dto';
import { UpdateTeamDTO } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTeams() {
    return this.prisma.team.findMany();
  }

  async getOneTeam(id: number) {
    const team = await this.prisma.team.findUnique({
      where: { id },
    });

    if (!team) {
      throw new NotFoundException("Aucune équipe n'existe avec cet id !");
    }

    return team;
  }

  async createTeam(data: CreateTeamDTO) {
    return this.prisma.team.create({
      data,
    });
  }

  async updateTeam(id: number, data: UpdateTeamDTO) {
    const team = await this.prisma.team.findUnique({
      where: { id },
    });

    if (!team) {
      throw new NotFoundException(
        "Aucune équipe n'existe avec cet id, on ne peut pas la modifier !",
      );
    }

    return this.prisma.team.update({
      where: { id },
      data,
    });
  }

  async deleteTeam(id: number) {
    const team = await this.prisma.team.findUnique({
      where: { id },
    });

    if (!team) {
      throw new NotFoundException(
        "Aucune équipe n'existe avec cet id, on ne peut pas la supprimer !",
      );
    }

    return this.prisma.team.delete({
      where: { id },
    });
  }
}
