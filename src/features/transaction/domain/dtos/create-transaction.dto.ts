import type { Transaction } from "@features/transaction/domain/entities/transaction.entity";

export interface CreateTransactionRequest extends Partial<Transaction> {
    amout: number,
    date: Date
};
