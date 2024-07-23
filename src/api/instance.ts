import React from 'react';
import { User } from './user';
import { Pdf } from './pdf';

class ApiInstance {
  user = new User();
  pdf = new Pdf();
}

const apiInstance = new ApiInstance();
const ApiContext = React.createContext<ApiInstance>(apiInstance);

export { ApiInstance, ApiContext, apiInstance };
