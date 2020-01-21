// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGzip = require('../../../app/middleware/gzip');
import ExportProxy from '../../../app/middleware/proxy';

declare module 'egg' {
  interface IMiddleware {
    gzip: typeof ExportGzip;
    proxy: typeof ExportProxy;
  }
}
