module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "serahjohnsoncluster.uemjx.mongodb.net"),
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "serahjohnsonbackend"),
        username: env("DATABASE_USERNAME", "sapwavino"),
        password: env("DATABASE_PASSWORD", "blackbeat"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
