const express = require("express");
const router = express.Router();

// Require controller modules.
const permissions_controller = require("../controllers/permissionsController");

/// PERMISSIONS ROUTES ///
// GET catalog home page.
router.get("/", permissions_controller.index);

// POST request to create Permission.
router.post("/permission/create", permissions_controller.permission_create_post);  

// POST request to update Permission.
router.post("/permission/:id/update", permissions_controller.permission_update_post);  

// DELETE request to delete Permission
router.post("/permission/:id/delete", permissions_controller.permission_delete_post);  

// GET request for one permission
router.get("/permission/:id", permissions_controller.permission_detail);  

// GET all permissions
router.get("/permissions", permissions_controller.permissions_list);  

module.exports = router;
