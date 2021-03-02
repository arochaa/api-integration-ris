import { load } from 'ts-dotenv';

const env = load({
  PORT: Number,
  CLIENT_DB: String,
  HOST_DB: String,
  USER_DB: String,
  PASS_DB: String,
  DATA_DB: String,
  PORT_DB: Number,
  MIN_POOL_DB: Number,
  MAX_POOL_DB: Number,
  IDLE_DB: Number,
  DEBUG_DB: String,
});

export default env;
