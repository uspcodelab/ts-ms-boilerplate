// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import * as logger from 'koa-logger';
import { MongoClient } from 'mongodb';

import { app } from './app';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const mongoURL = process.env.MONGO_URL || 'mongo://localhost:27017';
  const mongoDB = process.env.MONGO_DB || 'docspace';

  const mongoClient = new MongoClient(mongoURL);
  await mongoClient.connect();

  app.use(logger());

  app.context.db = mongoClient.db(mongoDB);

  app.listen(port, () => console.log('\n\n=== Server Running! ===\n\n'));
}

bootstrap().catch(console.dir);
