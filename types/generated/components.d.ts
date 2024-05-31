import type { Schema, Attribute } from '@strapi/strapi';

export interface TtTt extends Schema.Component {
  collectionName: 'components_tt_tts';
  info: {
    displayName: 'tt';
    icon: 'alien';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tt.tt': TtTt;
    }
  }
}
