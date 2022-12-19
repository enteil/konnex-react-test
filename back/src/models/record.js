export default (sequelize, DataTypes) => {
  const Record = sequelize.define(
    "Record",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      text: { type: DataTypes.STRING(255), allowNull: false },
    },
    {
      tableName: "records",
    }
  );

  Record.associate = function (models) {
    models.Record.belongsTo(models.User);
  };

  return Record;
};
