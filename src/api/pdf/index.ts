import { http } from '../decorator';
import type { Request } from '../decorator/http';
import type { CreatePdpData } from './type';

@http('pdf')
class Pdf {
  request!: Request;

  createPdp(data: CreatePdpData) {
    return this.request({ url: '/createPdfs', method: 'post', data });
  }
}

export { Pdf };
