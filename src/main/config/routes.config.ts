import { Express } from "express";
import { adminRoutes } from "../../app/features/admin/routes/admin.routes";
import { loginRoutes } from "../../app/features/login/routes/login.routes";

export const makeRoutes = (app: Express) => {
  app.use("/admin", adminRoutes);

  app.use("/login", loginRoutes);
};
