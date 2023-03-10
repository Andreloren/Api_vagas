import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { CreateUsersMiddleware } from "../../../shared/middleware/createUsers.middleware";
import { checkDuplicateAdminValidator } from "../validators/checkDuplicateAdmin.validator";

const adminRoutes = Router();

adminRoutes.post(
  "/",
  [CreateUsersMiddleware, checkDuplicateAdminValidator],
  new AdminController().create
);
adminRoutes.get("/", new AdminController().listAll);

export { adminRoutes };
