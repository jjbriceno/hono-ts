import { Hono } from "hono";
import userRoutes from "./features/users/api/User.routes";
import transactionRoutes from "./features/transactions/api/Transaction.routes";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.route('/user', userRoutes);
app.route('/transaction', transactionRoutes);

export default app;
