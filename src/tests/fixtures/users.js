import { faker } from '@faker-js/faker';

export const user = {
  id: 1,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: 'user@example.com',
  password: '$2a$10$Tj15FY0Z7SvMDuky/mwVmO8eFwvKtAUi44jzQslZoETnko88psjH2',
};

export const user2 = {
  id: 2,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: 'user2@example.com',
  password: '$2a$12$kgc.oO2mrcdMOlojiPv7Ge6v1maNyx2tHFGtczzoLzVC3hPuw91PK',
};
