import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Tasks } from './entity/Tasks';

const PostgresAppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cp8fec0l6cac73c4513g-a.oregon-postgres.render.com',
  port: 5432,
  username: 'tarefadb_user',
  password: 'BAmCHeybASsq6I7YuTe5c4beYh8aflsN',
  database: 'tarefadb',
  synchronize: true,
  logging: true,
  entities: [User, Tasks],
  migrations: [],
  subscribers: [],
  ssl: true,
});

const SqliteAppDataSource = new DataSource({
  type: 'sqlite',
  database: 'tarefadb.sql',
  synchronize: true,
  logging: true,
  entities: [User, Tasks],
  migrations: [],
  subscribers: [],
});

export const AppDataSource =
  process.env.ENV === 'PROD' ? PostgresAppDataSource : SqliteAppDataSource;
