import { StorageConfig } from "@keystone-6/core/types";

const baseUrl = 'http://localhost:3000';

export const storage: Record<string, StorageConfig> = {
  my_local_images: {
    // Images that use this store will be stored on the local machine
    kind: 'local',
    // This store is used for the image field type
    type: 'image',
    // The URL that is returned in the Keystone GraphQL API
    generateUrl: (path: string) => `${baseUrl}/images${path}`,
    // The route that will be created in Keystone's backend to serve the images
    serverRoute: {
      path: '/images',
    },
    // Set serverRoute to null if you don't want a route to be created in Keystone
    // serverRoute: null
    storagePath: 'public/images',
  },
  my_local_files: {
    kind: 'local',
    type: 'file',
    generateUrl: (path: string) => `${baseUrl}/videos${path}`,
    serverRoute: {
      path: '/videos',
    },
    storagePath: 'public/videos',
  }
  /** more storage */
}