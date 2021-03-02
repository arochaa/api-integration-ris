import env from './schemas/environment';

export default {
  development: {
    client: env.CLIENT_DB,
    connection: {
      host: env.HOST_DB,
      user: env.USER_DB,
      password: env.PASS_DB,
      database: env.DATA_DB,
      port: env.PORT_DB,
    },
    pool: {
      min: env.MIN_POOL_DB,
      max: env.MAX_POOL_DB,
      idleTimeoutMillis: env.IDLE_DB,
    },
    options: {
      debug: env.DEBUG_DB,
    },
  },
};
