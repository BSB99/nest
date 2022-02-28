import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') //router 경로
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('title') searchTitle: string) {
    return `What is this a ${searchTitle}`;
  }

  @Get(':id')
  getOne(@Param('id') id: Number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  delete(@Param('id') id: Number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') id: Number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(id, updateData);
  }
}
