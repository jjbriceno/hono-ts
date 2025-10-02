import { Hono } from "hono";
import userRoutes from "./features/user/api/user.routes";
import transactionRoutes from "./features/transaction/api/transaction.routes";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.route('/user', userRoutes);
app.route('/transaction', transactionRoutes);

export default app;
