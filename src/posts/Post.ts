import { list } from '@keystone-6/core';
import {
    checkbox,
    relationship,
    text,
  } from '@keystone-6/core/fields';
// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document';
import { isAdmin } from "../users/AccessControl";
import { filterPosts } from "./Filters";


export const Post = list({
  // WARNING
  //   for this starter project, anyone can create, query, update and delete anything
  //   if you want to prevent random people on the internet from accessing your data,
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: { 
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
    filter: {
      query: filterPosts,
      update: isAdmin,
      delete: isAdmin,
    },
  },

  // this is the fields for our Post list
  fields: {
    title: text({ validation: { isRequired: true } }),

    isPublished: checkbox(),
    // the document field can be used for making rich editable content
    //   you can find out more at https://keystonejs.com/docs/guides/document-fields
    content: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
    }),
    caption: text({ validation: { isRequired: false } }),
    // with this field, you can set a User as the author for a Post
    author: relationship({
      // we could have used 'User', but then the relationship would only be 1-way
      ref: 'User.posts',

      // this is some customisations for changing how this will look in the AdminUI
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'email'],
        inlineEdit: { fields: ['name', 'email'] },
        linkToItem: true,
        inlineConnect: true,
      },

      // a Post can only have one author
      //   this is the default, but we show it here for verbosity
      many: false,
    }),

    // with this field, you can add some Tags to Posts
    tags: relationship({
      // we could have used 'Tag', but then the relationship would only be 1-way
      ref: 'Tag.posts',

      // a Post can have many Tags, not just one
      many: true,

      // this is some customisations for changing how this will look in the AdminUI
      ui: {
        displayMode: 'cards',
        cardFields: ['name'],
        inlineEdit: { fields: ['name'] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ['name'] },
      },
    }),
  },
});