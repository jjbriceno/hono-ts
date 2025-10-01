import { Hono } from "hono";

import { TransactionRepository } from "../infrastructure/repositories/TransactionRepository.impl";
import { CreateTransactionUserCase } from "../application/use-cases/CreateTransaction.user-case";

const transactionRoutes = new Hono();

const transactionRepository = new TransactionRepository();
const createTransactionUserCase = new CreateTransactionUserCase(transactionRepository);

transactionRoutes.post('/', async (c) => {
    const request = await c.req.json();
    const transactionResponse = await createTransactionUserCase.execute(request);
    return c.json(transactionResponse);
});

export default transactionRoutes;
