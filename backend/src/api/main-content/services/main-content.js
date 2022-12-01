'use strict';

/**
 * main-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-content.main-content');
