const FileManager = require('./FileManagerClass')
class User {
    constructor() {
      this.fileManager = new FileManager('users.json')
    }

    getUser(id) {
      return this.fileManager.get(id)
    }

    async getAllUsers(fn) {
        await this.fileManager.getAll(fn)
    }

    async createUser(user, fn) {
      await this.fileManager.create(user, fn)
    }

    updateUser(user) {
      return this.fileManager.update(user)
    }

    deleteUser(id) {
      return this.fileManager.delete(id)
    }
  }

  module.exports = User