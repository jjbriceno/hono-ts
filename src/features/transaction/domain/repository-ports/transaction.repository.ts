import type { TransactionResponse } from '@transaction/domain/dtos/transaction-response';
import type { CreateTransactionRequest } from '@transaction/domain/dtos/create-transaction.dto';

export interface ITransactionRepository {
    save(transaction: CreateTransactionRequest): Promise<TransactionResponse>;
}