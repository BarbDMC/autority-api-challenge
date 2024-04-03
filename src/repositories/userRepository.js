import db from '@/database';

export const findAllUsers = () => db.models.user.findAll();

export const findUserById = (id) => db.models.user.findByPk(id);

export const findUniqueUser = (email) => db.models.user.findOne({ where: { email } });
