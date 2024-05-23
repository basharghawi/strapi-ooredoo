'use strict';

/**
 * prepaid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prepaid.prepaid');
