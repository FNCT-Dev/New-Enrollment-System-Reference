import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "v7hp9wA2LHe17pwtsLiDDm",
      token:
        "G4jw42tGtZ6WWWNkY7YUOXXDAPzqZzP7G3fH1T7ks9slNG1Rx78mr1H8WzxLzSd1VFOKBZipZhpzC7y4DCQhw",
    },
  ],
  preview: process.env.NODE_ENV === "development",
});
