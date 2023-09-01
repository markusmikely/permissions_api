const express = require("express");
const router = express.Router();

// Require controller modules.
const roles_controller = require("../controllers/rolesController");

/// ROLES ROUTES ///
// GET catalog home page.
router.get("/", roles_controller.index);

// POST request to create Role.
router.post("/role/create", roles_controller.role_create_post);  

// POST request to update Role.
router.post("/role/:id/update", roles_controller.role_update_post);  

// DELETE request to delete Role
router.post("/role/:id/delete", roles_controller.role_delete_post);  

// GET request for one role
router.get("/role/:id", roles_controller.role_detail);  

// GET all roles
router.get("/roles", roles_controller.roles_list);  

module.exports = router;
