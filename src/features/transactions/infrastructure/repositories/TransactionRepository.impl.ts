import { ITransactionRepository } from "../../domain/repository-ports/TransactionRepository";

import type { TransactionResponse } from "../../domain/dtos/CreateTransaction.dto";
import type { CreateTransactionRequest } from "../../domain/dtos/CreateTransaction.dto";

export class TransactionRepository implements ITransactionRepository {
    public async save(transaction: CreateTransactionRequest): Promise<TransactionResponse>{
        throw new Error("Method not implemented.");
    }
}