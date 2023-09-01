class Role {
    constructor() {
      this.roles = require('./../../data/roles.json')
      console.log('roles')
    }

    getRole(id) {

    }

    getAllRoles() {
        return this.roles
    }

    updateRole(role) {

    }

    deleteRole(id) {

    }
  }

  module.exports = Role