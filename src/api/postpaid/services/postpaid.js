'use strict';

/**
 * postpaid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::postpaid.postpaid');
