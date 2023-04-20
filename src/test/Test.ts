import { allowAll } from '@keystone-6/core/access';
import { list } from '@keystone-6/core';
import {
  text,
  relationship,
  password,
  timestamp,
  checkbox,
} from '@keystone-6/core/fields';

export const Test = list({
  access: allowAll,
  fields: {
    content: text({}),
  }
});