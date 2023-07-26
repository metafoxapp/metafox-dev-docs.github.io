import ApiGroupContext from "@/context/ApiGroupContext";
import { ApiEndpointGroupSchema } from "@/type";
import { createContext, useContext } from "react";
import {} from "nextra-theme-docs";
import Typography from "./Typography";

export const ApiGroup = ({
  value,
  children,
}: {
  value: ApiEndpointGroupSchema;
  children: React.ReactNode;
}) => {
  return (
    <ApiGroupContext.Provider value={value}>
      <Typography variant="body2">{value.description}</Typography>
      {children}
    </ApiGroupContext.Provider>
  );
};
