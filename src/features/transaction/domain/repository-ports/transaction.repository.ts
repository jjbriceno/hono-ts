import type { TransactionResponse } from '@features/transaction/domain/dtos/transaction-response';
import type { CreateTransactionRequest } from '@features/transaction/domain/dtos/create-transaction.dto';

export interface ITransactionRepository {
    save(transaction: CreateTransactionRequest): Promise<TransactionResponse>;
}