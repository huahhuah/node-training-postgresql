const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "USER",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
      nullable: false,
    },
    name: {
      type: "varchar",
      length: 50,
      nullable: false,
    },
    email: {
      type: "varchar",
      length: 320,
      nullable: false,
      unique: true,
    },
    role: {
      type: "varchar",
      length: 20,
      nullable: false,
    },
    password: {
      type: "varchar",
      length: 72,
      nullable: false,
      select: false,
    },
    created_at: {
      type: "timestamp",
      nullable: false,
      createDate: true,
    },
    updated_at: {
      type: "timestamp",
      nullable: false,
      updateDate: true,
    },
  },
});
