import api from './api';

interface Status {
  temperature: string;
  humidity: number;
  window: number;
  light: boolean;
  air: number;
}

export default async function getCurrentStatus(): Promise<Status> {
  const temperature = (await api.get('/temperature')).data;
  const humidity = (await api.get('/humidity')).data;
  const window = (await api.get('/window')).data;
  const light = (await api.get('/light')).data;
  const air = (await api.get('/air')).data;

  return { temperature, humidity, window, light, air };
}
