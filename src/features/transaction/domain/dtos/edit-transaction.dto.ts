import type { Transaction } from "@transaction/domain/entities/transaction.entity";

export interface EditTransactionRequest extends Partial<Transaction>{
    id: string
};