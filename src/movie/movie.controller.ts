import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch } from "@nestjs/common";
import { MovieDto } from "./dto";
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

  @Post()
  createMovie(@Body() dto: MovieDto) {
    return this.movieService.createMovie(dto);
  }

  @Patch('/:id')
  patchMovie(@Param('id', new ParseIntPipe()) id: number, @Body() dto: MovieDto) {
    return this.movieService.patchMovie(id, dto);
  }
}
