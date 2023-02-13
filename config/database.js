module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfl3rn9gp3jiui88u1pg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'recipesapp'),
      user: env('DATABASE_USERNAME', 'recipesappadmin'),
      password: env('DATABASE_PASSWORD', 'XDC3bMpbXNQcDyuzDXzI6B2XcFgrpBKs'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
