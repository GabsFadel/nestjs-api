/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-course.dto';
/* eslint-disable prettier/prettier */
export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {}
