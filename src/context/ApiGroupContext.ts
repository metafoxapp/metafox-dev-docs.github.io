import { ApiEndpointGroupSchema, ApiEndpointSubGroupSchema } from "@/type";
import { createContext } from "react";

export const ApiGroupContext = createContext<ApiEndpointGroupSchema>({
  name: "",
  description: "",
  endpoints: [],
  subgroups: {},
});

export default ApiGroupContext;
