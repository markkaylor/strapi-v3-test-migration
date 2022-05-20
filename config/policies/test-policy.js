'use strict';

/**
 * `test-policy` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('In test-policy policy.');

  await next();
};
