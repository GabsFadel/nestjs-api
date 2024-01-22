import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateCourseDTO } from './dto/create-course.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateCourseDTO } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() CreateCourseDTO: CreateCourseDTO) {
    return this.courseService.create(CreateCourseDTO);
  }

  @Put(':id')
  Upadate(@Param('id') id: number, @Body() UpdateCourseDTO: UpdateCourseDTO) {
    return this.courseService.update(id, UpdateCourseDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.courseService.remove(id);
  }
}
