import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPositions() {
    return this.prisma.position.findMany();
  }

  async getOnePosition(id: number) {
    const position = await this.prisma.position.findUnique({
      where: { id },
    });
    if (!position) {
      throw new NotFoundException(`Position with id ${id} not found`);
    }
    return position;
  }

  async createPosition(data) {
    const positionExists = await this.prisma.position.findUnique({
      where: { name: data.name },
    });
    if (!positionExists) {
      throw new NotFoundException(`Position with name ${data.name} not found`);
    }
    return this.prisma.position.create({
      data,
    });
  }

  async updatePosition(id: number, data) {
    const position = await this.prisma.position.update({
      where: { id },
      data,
    });
    if (!position) {
      throw new NotFoundException(`Position with id ${id} not found`);
    }
    return this.prisma.position.update({
      where: { id },
      data,
    });
  }

  async deletePosition(id: number) {
    const position = await this.prisma.position.delete({
      where: { id },
    });
    if (!position) {
      throw new NotFoundException(`Position with id ${id} not found`);
    }
    return this.prisma.position.delete({
      where: { id },
    });
  }
}
