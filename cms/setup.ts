// * Contentful Client Setup
import { createClient } from "contentful";

import { createClient as createClientM } from "contentful-management";

import type { Inputs, K, KisiDuzenleParams } from "../types/types";

import { makeSlug } from "../utils/utils";

// Clients
export const client = createClient({
  space: process.env.C_SPC_ID || "",
  accessToken: process.env.C_ACC_TKN || "",
});

export const clientM = createClientM({
  accessToken: process.env.C_MNG_TKN || "",
  retryOnError: false,
});

// * CRUD Functions * //
export const kisiEkle = async (inputs: Inputs) => {
  const space = await clientM.getSpace(process.env.C_SPC_ID || "");
  const env = await space.getEnvironment("master");
  const entry = await env.createEntry("kisi", {
    fields: {
      slug: { "en-US": makeSlug(inputs) },
      adsoyad: { "en-US": inputs.adsoyad },
      tel: { "en-US": inputs.tel },
      iscalled: { "en-US": false },
      isfav: { "en-US": false },
    },
  });
  entry.publish();
};

export const kisiDuzenle = async (params: KisiDuzenleParams) => {
  clientM
    .getSpace(process.env.C_SPC_ID || "")
    .then((space) => space.getEnvironment("master"))
    .then((environment) => environment.getEntry(params.kisi.sys.id))
    .then((entry) => {
      entry.fields = {
        slug: { "en-US": makeSlug(params.inputs) },
        adsoyad: { "en-US": params.inputs.adsoyad },
        tel: { "en-US": params.inputs.tel },
        iscalled: { "en-US": params.iscalled },
        isfav: { "en-US": params.isfav },
      };
      return entry.update();
    })
    .then((entry) => {
      entry.publish();
    });
};

export const kisiSil = async (kisi: K) => {
  const space = await clientM.getSpace(process.env.C_SPC_ID || "");
  const env = await space.getEnvironment("master");
  const entry = await env.getEntry(kisi.sys.id);
  await entry.unpublish();
  await entry.delete();
};

export const kayitSil = async (kisi: K) => {
  clientM
    .getSpace(process.env.C_SPC_ID || "")
    .then((space) => space.getEnvironment("master"))
    .then((environment) => environment.getEntry(kisi.sys.id))
    .then((entry) => {
      entry.fields = {
        ...entry.fields,
        iscalled: { "en-US": false },
      };
      return entry.update();
    })
    .then((entry) => {
      entry.publish();
    });
};

export const kisiAra = async (kisi: K) => {
  clientM
    .getSpace(process.env.C_SPC_ID || "")
    .then((space) => space.getEnvironment("master"))
    .then((environment) => environment.getEntry(kisi.sys.id))
    .then((entry) => {
      entry.fields = {
        ...entry.fields,
        iscalled: { "en-US": true },
      };
      return entry.update();
    })
    .then((entry) => {
      entry.publish();
    });
};

export const kisiFav = async (kisi: K) => {
  clientM
    .getSpace(process.env.C_SPC_ID || "")
    .then((space) => space.getEnvironment("master"))
    .then((environment) => environment.getEntry(kisi.sys.id))
    .then((entry) => {
      entry.fields = {
        ...entry.fields,
        isfav: { "en-US": true },
      };
      return entry.update();
    })
    .then((entry) => {
      entry.publish();
    });
};

export const favSil = async (kisi: K) => {
  clientM
    .getSpace(process.env.C_SPC_ID || "")
    .then((space) => space.getEnvironment("master"))
    .then((environment) => environment.getEntry(kisi.sys.id))
    .then((entry) => {
      entry.fields = {
        ...entry.fields,
        isfav: { "en-US": false },
      };
      return entry.update();
    })
    .then((entry) => {
      entry.publish();
    });
};
