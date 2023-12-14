import cors from 'cors';
import express from 'express';
import { ErrorHandler } from './errorhandler';

const app = express();
/**
 * required to be run in local
 */
app.use(cors());
app.use(express.json());

const dummyRouter = express.Router();

dummyRouter.get('/user', async (req, res, next) => {
  try {
    return res.status(200).send({
      user: {
        name: 'dummy user'
      }
    });

    // throw new Error('mocking error');
  } catch (error) {
    next(error);
  }
});

app.use('/dummy', dummyRouter);
app.use('/', async (req, res, next) => {
  try {
    return res.status(200).send({
      message: 'server is up'
    });
  } catch (error) {
    next(error);
  }
});
app.use(ErrorHandler);

export default app;
