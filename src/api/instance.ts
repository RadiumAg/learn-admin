import React from 'react';

class ApiInstance {}

const apiInstance = new ApiInstance();
const ApiContext = React.createContext<ApiInstance>(apiInstance);

export { ApiInstance, ApiContext, apiInstance };
