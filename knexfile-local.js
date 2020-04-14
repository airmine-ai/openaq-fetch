module.exports = {
  client: 'pg',
  connection: 'postgres://openaq:openaq-password@host.docker.internal:5432/openaq',
  pool: {
    min: 0,
    max: 10
  },
  acquireConnectionTimeout: 600000,
  migrations: {
    tableName: 'migrations'
  }
};
