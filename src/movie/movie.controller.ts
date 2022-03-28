import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateMovieDto } from "./dto";
import { MovieService } from "./movie.service";

@Controller('movies')
export class MovieController {

  constructor(private movieService: MovieService) { }

  @Get()
  getMovies() {
    return this.movieService.getMovies();
  }

  @Get('/:id')
  getMovie(@Param('id', new ParseIntPipe()) id: number) {
    return this.movieService.getMovie(id);
  }

  @Post('')
  createMovie(@Body() dto: CreateMovieDto) {
    return this.movieService.createMovie(dto);
  }
}
