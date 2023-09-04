class User {
    constructor() {
      this.users = require('./../../data/users.json')
      console.log('roles')
    }

    getRole(id) {

    }

    getAllUsers() {
        return this.users
    }

    updateRole(role) {

    }

    deleteRole(id) {

    }
  }

  module.exports = User