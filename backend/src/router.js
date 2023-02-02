const express = require("express");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdmin,
} = require("./auth");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

const itemControllers = require("./controllers/itemControllers");

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post("/users", hashPassword, userControllers.addUser);

router.use(verifyToken); // authentication wall
router.get("/users/:id", userControllers.getOneUser);
router.put("/users/:id", hashPassword, userControllers.editUser);

router.use(verifyAdmin); // admin wall

router.get("/users", userControllers.getUsers);
router.delete("/users/:id", userControllers.destroyUser);
module.exports = router;
