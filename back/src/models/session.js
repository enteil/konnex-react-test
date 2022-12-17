export default (sequelize, DataTypes) => {
  const Session = sequelize.define(
    "Session",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      ip: { type: DataTypes.STRING(100), allowNull: false },
      token: { type: DataTypes.STRING(100), allowNull: false },
      lastAt: { type: DataTypes.DATE, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      active: { type: DataTypes.TINYINT, allowNull: true },
    },
    {
      tableName: "sessions",
    }
  );
  Session.ENABLED = 1;
  Session.UNAUTHORIZED = 401;
  Session.NOT_EXIST = 404;

  Session.associate = function (models) {
    models.Session.belongsTo(models.User);
  };

  return Session;
};
