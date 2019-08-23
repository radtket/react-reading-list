import { getUser } from "./auth-client";
import { readForUser } from "./list-items-client";

const bootstrapAppData = async () => {
  const data = await getUser();
  if (!data) {
    return { user: null, listItems: [] };
  }
  const { user } = data;
  const { listItems } = await readForUser(user.id);
  return {
    user,
    listItems,
  };
};

export default bootstrapAppData;
