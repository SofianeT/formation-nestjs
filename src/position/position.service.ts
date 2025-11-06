import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPositions() {
    return this.prisma.positions.findMany();
  }

  async getOnePosition(id: number) {
    const position = await this.prisma.positions.findUnique({
      where: { id },
    });
    if (!position) {
      throw new NotFoundException(`Position with id ${id} not found`);
    }
    return position;
  }

  async createPosition(data) {
    // use findFirst for non-unique fields (or use findUnique only if `name` is unique in the schema)
    const positionExists = await this.prisma.positions.findFirst({
      where: { name: data.name },
    });
    if (positionExists) {
      throw new BadRequestException(
        `Position with name ${data.name} already exists`,
      );
    }
    return this.prisma.positions.create({
      data,
    });
  }

  async updatePosition(id: number, data) {
    // check existence first to provide a clear NotFoundException
    const existing = await this.prisma.positions.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException(`Position with id ${id} not found`);
    }
    return this.prisma.positions.update({
      where: { id },
      data,
    });
  }

  async deletePosition(id: number) {
    // check existence first to provide a clear NotFoundException
    const existing = await this.prisma.positions.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException(`Position with id ${id} not found`);
    }
    return this.prisma.positions.delete({
      where: { id },
    });
  }
}
