import { Router } from 'express';

import getCurrentStatus from '../services/getCurrentStatus';

import Status from '../services/db';

const persist = Router();

persist.get('/', async (req, res) => {
  const status = await getCurrentStatus();
  const roomStatus = new Status(status);
  const response = await roomStatus.save();
  return res.json(response);
});

export default persist;
