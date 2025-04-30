import express, { Request, Response, Application } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('HallLagbe server is running');
});

export default app;
