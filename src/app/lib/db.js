import mongoose from 'mongoose';

const mongodbURI =
  'mongodb+srv://kalyan:Kalyan5252@cluster0.w3srcwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const cached = (global.mongoose = { conn: null, promise: null });

const opts = { useURLParser: true, useUnifiedTopoly: true };

export async function startDb() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    mongoose
      .connect(mongodbURI)
      .then((conn) => {
        cached.conn = conn;
      })
      .catch((err) => console.log(err));
  }
  return cached.conn;
}

export default startDb;
