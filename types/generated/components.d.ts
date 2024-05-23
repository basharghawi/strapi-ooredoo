import type { Schema, Attribute } from '@strapi/strapi';

export interface BoxesBoxes extends Schema.Component {
  collectionName: 'components_boxes_boxes';
  info: {
    displayName: 'boxes';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    main: Attribute.Integer & Attribute.Required;
    unit: Attribute.String;
    bonus: Attribute.String;
    validity: Attribute.Integer;
  };
}

export interface FiltersFilters extends Schema.Component {
  collectionName: 'components_filters_filters';
  info: {
    displayName: 'filters';
    description: '';
  };
  attributes: {
    oneTime: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    recurring: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    local_data: Attribute.Integer & Attribute.Required;
    local_minutes: Attribute.Integer & Attribute.Required;
    international_minutes: Attribute.Integer & Attribute.Required;
    category: Attribute.Enumeration<
      [
        'All',
        'Hala Super',
        'Flexi',
        'Hala Credit',
        'Data',
        'Roaming',
        'Endless Data',
        'Hala Smart',
        'International Minutes'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'All'>;
  };
}

export interface PopupPopup extends Schema.Component {
  collectionName: 'components_popup_popups';
  info: {
    displayName: 'popup';
  };
  attributes: {
    hasPopup: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface TagsTags extends Schema.Component {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'tags';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<['primary-tag', 'secondary-tag']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary-tag'>;
    text: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'boxes.boxes': BoxesBoxes;
      'filters.filters': FiltersFilters;
      'popup.popup': PopupPopup;
      'tags.tags': TagsTags;
    }
  }
}
