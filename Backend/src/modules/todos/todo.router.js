import { Router } from "express";
import { authenticate } from '../../middleware/authenticate.js'; // Adjust the path accordingly
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "./todo.controller.js";

const router = Router();

// router.get("/", getTodos);
// router.post("/", addTodo);
// router.delete("/:id", deleteTodo);
// router.put("/:id", updateTodo);

router.get("/get", authenticate, getTodos);
router.post("/create", authenticate, addTodo);
router.delete("/destroy/:id", authenticate, deleteTodo);
router.put("/modify/:id", authenticate, updateTodo);

export default router;
