// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import * as logger from 'koa-logger';
import { MongoClient } from 'mongodb';

import { app } from './app';
import { stan } from './stan';

const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL || 'mongo://localhost:27017';
const mongoDB = process.env.MONGO_DB || 'docspace';

async function bootstrap() {
  const mongoClient = new MongoClient(mongoURL);
  await mongoClient.connect();
  console.log('- Database connected');

  stan.on('connect', () => {
    console.log('- Broker connected');
    app.use(logger());

    app.context.db = mongoClient.db(mongoDB);
    app.context.broker = stan;

    app.listen(port, () => console.log('\n\n=== Server Running! ===\n\n'));
  });
}

bootstrap().catch(console.dir);
