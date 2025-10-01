import type { TransactionResponse } from '../dtos/CreateTransaction.dto';
import type { CreateTransactionRequest } from '../dtos/CreateTransaction.dto';

export interface ITransactionRepository {
    save(transaction: CreateTransactionRequest): Promise<TransactionResponse>;
}