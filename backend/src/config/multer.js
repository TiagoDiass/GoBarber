import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),

    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, resp) => {
        if (err) return callback(err);

        return callback(null, resp.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
