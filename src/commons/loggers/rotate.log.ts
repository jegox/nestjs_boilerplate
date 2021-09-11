import { join } from 'path';
import * as rfs from 'rotating-file-stream';

//# See more info https://www.npmjs.com/package/rotating-file-stream
export const accessLogStream = rfs.createStream('app.log', {
  interval: '1d',
  path: join(__dirname, 'logs'),
  maxFiles: 30,
  compress: 'gzip',
});
