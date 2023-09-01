const express = require("express");
const router = express.Router();

// Require controller modules.
const users_controller = require("../controllers/usersController");

/// USERS ROUTES ///
// GET catalog home page.
router.get("/", users_controller.index);

// POST request to create Role.
router.post("/role/create", users_controller.user_create_post);  

// POST request to update Role.
router.post("/role/:id/update", users_controller.user_update_post);  

// DELETE request to delete Role
router.post("/role/:id/delete", users_controller.user_delete_post);  

// GET request for one role
router.get("/role/:id", users_controller.user_detail);  

// GET all roles
router.get("/roles", users_controller.users_list);  

module.exports = router;
