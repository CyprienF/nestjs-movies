import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MovieService {

  constructor(private prisma: PrismaService) { }

  async getMovies() {
    return await this.prisma.movie.findMany();
  }

  async getMovie(id: number) {
    return await this.prisma.movie.findFirst({
      where: {
        id: id
      }
    })
  }
}
