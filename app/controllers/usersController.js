const asyncHandler = require("express-async-handler");
const Users = require('./../classes/UserClass')
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Users API documentation");
});

// Display list of all users.
exports.users_list = asyncHandler(async (req, res, next) => {
    const u = new Users()
    await u.getAllUsers(users => {
      res.status(200).json({ users: users });
    })
});

// Display detail page for a specific user.
exports.user_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: User detail: ${req.params.id}`);
});

// Handle user create on POST.
exports.user_create_post = asyncHandler(async (req, res, next) => {
  const u = new Users()
  await u.createUser(req.body, response => {
    if(!response) {
      res.status(400).json({ message: 'Failed to create user' });
    } else {
      res.status(200).json({ user: response });
    }
  })
});

// Handle user delete on POST.
exports.user_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: user delete POST");
});

// Handle user update on POST.
exports.user_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: user update POST");
});