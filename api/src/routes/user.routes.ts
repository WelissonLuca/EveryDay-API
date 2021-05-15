import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  // exemplo de rota
  return res.send('Olá');
});

export { userRouter };
