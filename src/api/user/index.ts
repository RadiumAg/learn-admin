import { http } from '../decorator';
import type { Request } from '../decorator/http';
import { CreatePdpData } from '../pdf/type';

@http('flowDy')
class User {
  request!: Request;

  createPdp(data: CreatePdpData) {
    return this.request({ url: '/createPdfs', method: 'post', data });
  }
}

export { User };
