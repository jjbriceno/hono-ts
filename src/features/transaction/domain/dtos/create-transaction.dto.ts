import type { Transaction } from "@transaction/domain/entities/transaction.entity";

export interface CreateTransactionRequest extends Partial<Transaction> {
    amout: number,
    date: Date
};
