// var Users = require("./data/users.json");
// var Roles = require("./data/roles.json");
// var Permissions = require("./data/permissions.json");

var express = require('express');  
var cors = require('cors');
var bodyParser = require("body-parser");
var app = express();  
var port = process.env.port || 1337;  
  
var users = require("./app/routes/users");
var roles = require("./app/routes/roles");
var permissions = require("./app/routes/permissions");

app.use(cors())
app.use(bodyParser.json())
app.use("/users", users);
app.use("/roles", roles);
app.use("/permissions", permissions);

app.listen(port, function () {  
    var datetime = new Date();  
    var message = "Server runnning on Port: " + port + ". Started at : " + datetime;  
    console.log(message);  
});  
// // Users

// http://localhost:1337/permissions/permissions
// http://localhost:1337/permisssions/permissions
// // app.get("/users", (req, res) => {  
// //     response.json({"Message":"Welcome to Node js"});  
// // });  
// // Roles
// app.get("/roles", (req, res) => {  
//     getRoles(req, res)
// });  
// app.post("/roles", (req, res) => {  
//     createRole(req, res)
// });  
// app.patch("/roles", (req, res) => { 
//     updateRole(req, res)
// });  
// app.delete("/roles", (req, res) => {  
//     removeRole(req.body.id, res)
// });  


// // Role Controller
// const getRoles = (req, res) => {
//     const roles = Roles.filter(r => {
//         const filters = true 
//         if(req.body && req.body.role) filters = filters && req.body.role === r._id
//         if(req.body && req.body.permission) filters = filters && r.permissions.indexOf(req.body.permission) >= 0
//         return filters
//     })

//     let formattedRoles = []

//     roles.forEach(role => {
//         const parent = getRoleById(role.parent)[0]
//         const permissions = getRolePermissions(role.permissions)
//         let newRole = {...role, parent: parent ? parent.name : "N/A", permissions: permissions}
//         formattedRoles.push(newRole)
//     })
//     res.status(200).json({"roles": formattedRoles});  
// }
// const getRolePermissions = permissions => {
//     let names = []
//     permissions.forEach(p => {
//         const name = getPermissionName(p) 
//         if(name) names.push(name)
//     })
//     console.log('names', names)
//     return names
// }
// const getPermissionName = permission => {
//     return Permissions.filter(p => p._id === permission)[0]?.permission
// }
// const getRoleByName = (name) => {
//     return Roles.filter(r => r.name === name)[0]
// }
// const getRoleById = (id) => {
//     return Roles.filter(r => r._id === id)
// }

// const createRole = (req, res) => {
//     // check name is unique
//     const role = getRoleByName(req.body.name)
//     if(role) {
//         res.status(409).json({
//             "message": `A role with the name ${req.body.name} already exists`
//         })
//     } else {
//         const newRole = {
//             name: req.body.name,
//             permissions: [],
//             active: true
//         }
//         // Save new role    
//     }
// }

// const updateRole = (req, res) => {
//     const roleId = req.body.id
//     const role = getRole("Update", roleId, res)
//     if(role) {
//         const newRole = {...role}
        
//         if(req.body.name) newRole.name = req.body.name
//         if(req.body.permissions) newRole.permissions = req.body.permissions
//         if(req.body.active) newRole.active = req.body.active

//         if(role === newRole) {
//             response.status(200).json({
//                 "message": `Role ${roleId} updated successfully`
//             })
//             // TODO: Save changes
//         } else {
//             response.status(200).json({
//                 "message": `Role ${roleId} nothing changed`
//             })
//         }

//     }
// }
// const removeRole = (roleId, response) => {
//     const role = getRole("Delete", roleId, response); 
//     if(role) {
//         // TODO: remove role
//         response.json({"message": `Role  ${roleId} deleted.`});  
//     }
// }
// const getRole = (type, roleId, response) => {
//     if(roleId) {
//         const role = Roles.filter(r => roleId == r._id)[0]
//         if(role) {
//             return role
//         } else {
//             response.status(400).json({
//                 "message": `${type} failed. No role found`
//             })
//         }
//     } else {
//         response.status(400).json({
//             "message": `${type} failed. No role id provided`
//         })
//     }
// }

// // Permissions
// app.get("/permissions/:id", (req, res) => {  
//     response.json({"Message":"Welcome to Node js"});  
// });
// app.get("/permissions", (req, res) => {  
//     response.json({"Message":"Welcome to Node js"});  
// });
// app.post("/permissions", (req, res) => {  
//     response.json({"Message":"Welcome to Node js"});  
// });  
// app.patch("/permissions", (req, res) => {  
//     response.json({"Message":"Welcome to Node js"});  
// });  
// app.delete("/permissions/:id", (req, res) => {  
//     response.json({"Message":"Welcome to Node js"});  
// });  
  
