import { Session } from "../users/Session";

export const filterPosts = ({ session }: { session: Session }) => {
  // if the user is an Admin, they can access all the records
  console.log(session);
  if (session?.data.isAdmin) return true;
  // otherwise, filter for published posts
  return { isPublished: { equals: true } };
}