import { IsInt, IsOptional, IsString } from "class-validator";

export class MovieDto {

  @IsString()
  title: string;

  @IsInt()
  runtime: number;

  @IsString()
  overview: string;

  @IsString()
  releaseDate: string;

  @IsString()
  @IsOptional()
  backgroundImage?: string;
}
