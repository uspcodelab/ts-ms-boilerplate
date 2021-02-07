// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import * as logger from 'koa-logger';

import { app } from './app';

const port = process.env.PORT || 3000;

function bootstrap() {
  app.use(logger());
  app.listen(port, () => console.log('\n\n=== Server Running! ===\n\n'));
}

bootstrap();
