import { Express } from "express";
import { adminRoutes } from "../../app/features/admin/routes/admin.routes";

export const makeRoutes = (app: Express) => {
  app.use("/admin", adminRoutes);
};
