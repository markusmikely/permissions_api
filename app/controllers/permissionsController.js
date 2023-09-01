const asyncHandler = require("express-async-handler");
const Permissions = require('./../classes/PermissionsClass')

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Permissions API documentation");
});

// Display list of all permissions.
exports.permissions_list = asyncHandler(async (req, res, next) => {
    const p = new Permissions()
    res.status(200).json({ permissions: p.getAllPermission() });
});

// Display detail page for a specific permission.
exports.permission_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: permission detail: ${req.params.id}`);
});

// Handle permission create on POST.
exports.permission_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: permission create POST");
});

// Handle permission delete on POST.
exports.permission_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: permission delete POST");
});

// Handle permission update on POST.
exports.permission_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: permission update POST");
});