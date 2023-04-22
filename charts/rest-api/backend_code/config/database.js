getProdConnections = (env) => {
return {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('POSTGRES_HOST'),
        database: env('POSTGRES_DB'),
        username: env('POSTGRES_USER'),
        password: env('POSTGRES_PASSWORD'),
      },
      options: {},
    },
  }
}

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: getProdConnections(env), 
});
