import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class PlayersService {
  constructor(private prisma: PrismaService) {}

  async getAllPlayers() {
    return this.prisma.players.findMany({
      orderBy: { ID: 'asc' },
    });
  }
}
