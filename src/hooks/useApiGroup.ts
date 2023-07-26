import ApiGroupContext from "@/context/ApiGroupContext";
import { useContext } from "react";

export const useApiGroup = () => useContext(ApiGroupContext);
