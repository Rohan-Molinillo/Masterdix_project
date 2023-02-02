const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (username, email, hashedPassword) values (?, ?, ?)`,
      [user.username, user.email, user.hashedPassword]
    );
  }

  getUserByEmail(user) {
    return this.connection.query("select * from user where email = ?", [
      user.email,
    ]);
  }

  findAll() {
    return this.connection.query(
      `select id, username, email, role from  ${this.table}`
    );
  }

  find(id) {
    return this.connection.query(
      `select username, email, role from  ${this.table} where id = ?`,
      [id]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set username = ?, email = ?, hashedPassword = ? where id = ?`,
      [user.username, user.email, user.hashedPassword, user.id]
    );
  }
}

module.exports = UserManager;
