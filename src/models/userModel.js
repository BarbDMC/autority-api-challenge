import { DataTypes, Model } from 'sequelize';

import { generateToken } from '@/services/token';

export default function (sequelize) {
  class User extends Model {
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    generateToken(expiresIn = '1h') {
      const data = { id: this.id, email: this.email };
      return generateToken(data, expiresIn);
    }
  }

  User.init({
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    modelName: 'user',
    sequelize,
  });

  return User;
}
