const FileManager = require('./FileManagerClass')
class Permission {
    constructor() {
      this.fileManager = new FileManager('permissions.json')
    }

    getPermission(id) {
        const permission = this.fileManager.get(id)
        return permission
    }

    async getAllPermission(fn) {
        await this.fileManager.getAll(fn)
    }

    updatePermission(updatePermission) {
        return this.fileManager.update(updatePermission)
    }

    deletePermission(id) {
        return this.fileManager.delete(id)
    }
  }

  module.exports = Permission