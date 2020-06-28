import mongoose from 'mongoose';

const username = process.env.DB_USERNAME || '';
const password = process.env.DB_PASSWORD || '';

const database = process.env.DB_NAME || '';
const collection = process.env.DB_COLLECTION || 'test';

const uri = `mongodb+srv://${username}:${password}@cluster0-6hwky.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const RoomSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  window: { type: Number, min: 0, max: 100 },
  light: Boolean,
  air: { type: Number, min: 0, max: 1 },
  createdAt: { type: Date, default: Date.now },
});

const Status = mongoose.model(collection, RoomSchema);

export default Status;
