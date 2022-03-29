import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { MovieDto } from "./dto";

@Injectable()
export class MovieService {

  constructor(private prisma: PrismaService) { }

  async getMovies() {
    return await this.prisma.movie.findMany({
      orderBy: [
        {
          id: 'asc'
        }
      ]
    });
  }

  async getMovie(id: number) {
    return await this.prisma.movie.findFirst({
      where: {
        id: id
      }
    });
  }

  async createMovie(dto: MovieDto) {
    return await this.prisma.movie.create({
      data: {
        ...dto
      }
    });
  }

  async patchMovie(id: number, dto: MovieDto) {
    return await this.prisma.movie.update({
      where: {
        id: id
      },
      data: {
        ...dto
      }
    });
  }
}
