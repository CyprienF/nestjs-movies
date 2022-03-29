import { IsInt, IsOptional, IsString } from "class-validator";

export class MovieDto {

  @IsString()
  title: string;

  @IsInt()
  runtime: number;

  @IsString()
  overview: string;

  @IsString()
  @IsOptional()
  backgroundImage?: string;
}
