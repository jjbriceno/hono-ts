import { Hono } from "hono";

import { TransactionRepository } from "@transaction/infrastructure/repositories/transaction.repository.impl";
import { CreateTransactionUserCase } from "@transaction/application/use-cases/create-transaction.user-case";

const transactionRoutes = new Hono();

const transactionRepository = new TransactionRepository();
const createTransactionUserCase = new CreateTransactionUserCase(transactionRepository);

transactionRoutes.post('/', async (c) => {
    const request = await c.req.json();
    const transactionResponse = await createTransactionUserCase.execute(request);
    return c.json(transactionResponse);
});

export default transactionRoutes;
