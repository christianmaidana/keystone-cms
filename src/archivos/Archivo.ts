import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  image,
  text,
} from '@keystone-6/core/fields';

export const Archivo = list({
    access: allowAll,
    fields: {
      path: text({ validation: { isRequired: true } }),
      description: text({ validation: { isRequired: false } }),
      avatar: image({ storage: 'my_local_images' }),
    }
});