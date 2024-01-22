import { Module } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'docker',
  database: 'dev_training-db',
  entities: [],
  synchronize: true,
};

@Module({})
export class DatabaseModule {}
