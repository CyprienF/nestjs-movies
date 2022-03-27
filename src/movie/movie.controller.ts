import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
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
}
