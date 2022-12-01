'use strict';

/**
 * public-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::public-content.public-content');
