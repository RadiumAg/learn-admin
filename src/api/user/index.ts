import { http } from '../decorator';
import type { Request } from '../decorator/http';

@http('flowDy')
class User {
  request!: Request;
}

export { User };
