// Contentful Client Setup
import { createClient } from "contentful";
import { createClient as createClientM } from "contentful-management";

const client = createClient({
  space: process.env.C_SPC_ID || "",
  accessToken: process.env.C_ACC_TKN || "",
});

const clientM = createClientM({
  accessToken: process.env.C_MNG_TKN || "",
});

export { client, clientM };
