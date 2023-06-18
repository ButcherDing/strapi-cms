module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-210.railway.app'),
      port: env.int('PGPORT', 7923),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'password'),
      ssl: env.bool(true),
    },
  },
});