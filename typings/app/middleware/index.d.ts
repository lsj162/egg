// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGetIp = require('../../../app/middleware/getIp');
import ExportIp = require('../../../app/middleware/ip');
import ExportProxy from '../../../app/middleware/proxy';

declare module 'egg' {
  interface IMiddleware {
    getIp: typeof ExportGetIp;
    ip: typeof ExportIp;
    proxy: typeof ExportProxy;
  }
}
