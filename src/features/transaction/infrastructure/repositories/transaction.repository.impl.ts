import { ITransactionRepository } from "@transaction/domain/repository-ports/transaction.repository";

import type { TransactionResponse } from "@transaction/domain/dtos/transaction-response";
import type { CreateTransactionRequest } from "@transaction/domain/dtos/create-transaction.dto";

export class TransactionRepository implements ITransactionRepository {
    public async save(transaction: CreateTransactionRequest): Promise<TransactionResponse>{
        throw new Error("Method not implemented.");
    }
}