import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { CreateAdminValidator } from "../validators/createAdmin.validator";

const adminRoutes = Router();

adminRoutes.post("/", [CreateAdminValidator], new AdminController().create);

export { adminRoutes };
