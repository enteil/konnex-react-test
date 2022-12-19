import bcrypt from "bcrypt";
export default (sequelize, DataTypes) => {
  const db = sequelize.models;
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(255), allowNull: false },
      email: { type: DataTypes.STRING(255), allowNull: false },
      password: { type: DataTypes.STRING(255), allowNull: false },
    },
    {
      paranoid: true,
      tableName: "users",
    }
  );

  User.associate = function (models) {
    models.User.hasMany(models.Session);
    models.User.hasMany(models.Record);
  };
  User.prototype.truePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  User.prototype.createPassword = async function (password) {
    return await bcrypt.hash(password, 10);
  };

  User.prototype.createToken = async function (ipAddress) {
    let token = await bcrypt.hash(
      ipAddress + "-" + Date.now() + "-" + this.id,
      10
    );
    return Buffer.from(Date.now() + token).toString("base64");
  };
  User.prototype.createSession = async function (data) {
    const newToken = await this.createToken(data.ipAddress);
    const newSessionData = {
      ip: data.ipAddress,
      token: newToken,
      userId: this.id,
      active: 1,
      lastAt: Date.now(),
    };
    return await db.Session.create(newSessionData);
  };
  return User;
};
