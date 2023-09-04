const FileManager = require('./FileManagerClass')
class Role {
    constructor() {
      this.fileManager = new FileManager('roles.json')
    }

    getRole(id) {
      return this.fileManager.get(id)
    }

    async getAllRoles(fn) {
        await this.fileManager.getAll(fn)
    }

    async createRole(role, fn) {
      await this.fileManager.create(role, fn)
    }

    updateRole(role) {
      return this.fileManager.update(role)
    }

    deleteRole(id) {
      return this.fileManager.delete(id)
    }
  }

  module.exports = Role