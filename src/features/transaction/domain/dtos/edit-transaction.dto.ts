import type { Transaction } from "@features/transaction/domain/entities/transaction.entity";

export interface EditTransactionRequest extends Partial<Transaction>{
    id: string
};