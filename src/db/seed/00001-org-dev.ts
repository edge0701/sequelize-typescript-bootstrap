'use strict';

export default {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('org', [
      {
        name: 'Org1',
      },
      {
        name: 'Org字', // allow unicode
      },
    ], {
      validate: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('org', null, {});
  },
};
