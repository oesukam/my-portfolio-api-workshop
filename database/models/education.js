'use strict';
module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define(
    'Education',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      school: DataTypes.STRING,
      degree: DataTypes.STRING,
      fromYear: DataTypes.DATE,
      toYear: DataTypes.DATE,
      major: DataTypes.STRING
    },
    {}
  );
  Education.associate = function(models) {
    // associations can be defined here
  };
  return Education;
};
