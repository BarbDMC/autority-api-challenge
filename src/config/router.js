import indexRouter from '@/routes/router';

export default function (app) {
  app.use('/', indexRouter);
}
