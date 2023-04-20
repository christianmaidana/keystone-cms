import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  image,
  file,
  text,
} from '@keystone-6/core/fields';
import { isLoggedIn } from "../users/AccessControl";

export const Content = list({
    access: {
      operation: {
        create: () => true,
        query: () => true,
        update: isLoggedIn,
        delete: () => true,
      },
    },
    fields: {
      assetId: text({ validation: { isRequired: true } }),
      contentId: text({ validation: { isRequired: false } }),
      contentType: text({validation: {isRequired: true}}),
      title: text({label: "Content Title"}),
      video: file({ storage: 'my_local_files' }),
      image: image({ storage: 'my_local_images' }),
    }
});