export type ApiEndpointSubGroupSchema = {
  httpMethods: string[];
  uri: string;
  metadata: {
    groupName: string;
    groupDescription: string;
    subgroup: any;
    subgroupDescription: any;
    title: string;
    description: string;
    authenticated: boolean;
    custom: Array<any>;
  };
  headers: any;
  urlParameters: Array<any>;
  cleanUrlParameters: Array<any>;
  queryParameters: Array<any>;
  cleanQueryParameters: Array<any>;
  bodyParameters: any;
  cleanBodyParameters: any;
  fileParameters: Array<any>;
  responses: Array<any>;
  responseFields: Array<any>;
  nestedBodyParameters: any;
  nestedResponseFields: Array<any>;
  boundUri: string;
  custom: Array<any>;
};

export type ApiEndpointGroupSchema = {
  name: string;
  description: string;
  endpoints: Array<{
    custom: Array<any>;
    httpMethods: Array<string>;
    uri: string;
    metadata: {
      custom: Array<any>;
      groupName: string;
      groupDescription: string;
      subgroup: any;
      subgroupDescription: any;
      title: string;
      description: string;
      authenticated: boolean;
    };
    headers: any;
    urlParameters: Array<any>;
    cleanUrlParameters: Array<any>;
    queryParameters: Array<any>;
    cleanQueryParameters: Array<any>;
    bodyParameters: any;
    cleanBodyParameters: any;
    fileParameters: Array<any>;
    responses: Array<any>;
    responseFields: Array<any>;
    nestedBodyParameters: any;
    nestedResponseFields: Array<any>;
    boundUri: string;
  }>;
  subgroups: {
    [name: string]: ApiEndpointSubGroupSchema[];
  };
};
