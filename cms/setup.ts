// * Contentful Client Setup
import { createClient } from "contentful";

import { createClient as createClientM } from "contentful-management";

import type { Kisi } from "../features/api/apiSlice";

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
export const kisiEkle = async (inputs: { adsoyad: string; tel: string }) => {
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

export const kisiDuzenle = async (params: {
  kisi: Kisi;
  inputs: { adsoyad: string; tel: string };
  iscalled: boolean;
  isfav: boolean;
}) => {
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

export const kisiSil = async (kisi: Kisi) => {
  const space = await clientM.getSpace(process.env.C_SPC_ID || "");
  const env = await space.getEnvironment("master");
  const entry = await env.getEntry(kisi.sys.id);
  await entry.unpublish();
  await entry.delete();
};

export const kayitSil = async (kisi: Kisi) => {
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

export const kisiAra = async (kisi: Kisi) => {
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

export const kisiFav = async (kisi: Kisi) => {
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

export const favSil = async (kisi: Kisi) => {
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
