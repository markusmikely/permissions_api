const asyncHandler = require("express-async-handler");
const Roles = require('./../classes/RolesClass')

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Roles API documentation");
});

// Display list of all roles.
exports.roles_list = asyncHandler(async (req, res, next) => {
    const r = new Roles()
    await r.getAllRoles(roles => {
      res.status(200).json({ roles: roles });
    })
});

// Display detail page for a specific role.
exports.role_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Role detail: ${req.params.id}`);
});

// Handle role create on POST.
exports.role_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Role create POST");
});

// Handle role delete on POST.
exports.role_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Role delete POST");
});

// Handle role update on POST.
exports.role_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Role update POST");
});