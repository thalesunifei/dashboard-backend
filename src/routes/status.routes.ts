import { Router } from 'express';

import getCurrentStatus from '../services/getCurrentStatus';

const status = Router();

status.get('/', async (req, res) => {
  const roomStatus = await getCurrentStatus();
  return res.json(roomStatus);
});

export default status;
