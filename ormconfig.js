module.exports = {
  type: process.env.DIALECT,
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  migrations: ['./src/database/migrations/**.ts'],
  entities: ['./src/models/**.ts'],
  loggin: true,
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
