// Contentful Client Setup
import { createClient } from "contentful";

const client = createClient({
  space: process.env.C_SPC_ID || "",
  accessToken: process.env.C_ACC_TKN || "",
});

export { client };
