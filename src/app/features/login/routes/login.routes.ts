import { Router } from "express";
import { authorizationMiddleware } from "../../../shared/middleware/autorization.middleware";
import { LoginController } from "../controllers/login.controller";

const loginRoutes = Router();

loginRoutes.post("/", new LoginController().login);
loginRoutes.get(
  "/logado",
  authorizationMiddleware,
  new LoginController().listLogged
);

export { loginRoutes };
