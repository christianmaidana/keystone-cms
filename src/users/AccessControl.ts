import { AccessOperation } from "@keystone-6/core/dist/declarations/src/types/config/access-control";
import { BaseListTypeInfo, ListOperationAccessControl } from "@keystone-6/core/types";
import { Session } from "./Session";

export const isAdmin = ({ session }: { session: Session }): boolean => session?.data.isAdmin;

export const isLoggedIn = ({ session }: { session: Session }): boolean => {
  console.log("Session data:: ", session?.data);
  return !!session?.data
};
