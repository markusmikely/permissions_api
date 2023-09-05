const express = require("express");
const router = express.Router();

// Require controller modules.
const users_controller = require("../controllers/usersController");

/// USERS ROUTES ///
// GET catalog home page.
router.get("/", users_controller.index);

// POST request to create user.
router.post("/user/create", users_controller.user_create_post);  

// POST request to update user.
router.post("/user/:id/update", users_controller.user_update_post);  

// DELETE request to delete user
router.post("/user/:id/delete", users_controller.user_delete_post);  

// GET request for one user
router.get("/user/:id", users_controller.user_detail);  

// GET request user by email
router.get("/user/email/:email", users_controller.user_by_email);

// GET all users
router.get("/users", users_controller.users_list);  

module.exports = router;
