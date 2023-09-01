class Permission {
    constructor() {
      this.permissions = require('./../../data/permissions.json')
    }

    getPermission(id) {
        const permission = this.permissions.filter(p => p._id === id)[0]
        return permission
    }

    getAllPermission() {
        return this.permissions
    }

    updatePermission(updatePermission) {
        const permission = {
            ...this.permissions.filter(p => p._id === id)[0],
            ...updatePermission
        }
        // Save permission
        return permission
    }

    deletePermission(id) {
        const permissionIndex = this.permissions.map(p => p._id.indexOf(id));
        if(permissionIndex) {
            this.permissions.splice(permissionIndex, 1)
            return true
        } else {
            return false
        }
    }
  }

  module.exports = Permission