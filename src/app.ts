import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyparser from 'koa-bodyparser';
import * as json from 'koa-json';
import * as cors from '@koa/cors';

export const app: Koa = new Koa();

const router: Router = new Router();

app.use(bodyparser());
app.use(json());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
