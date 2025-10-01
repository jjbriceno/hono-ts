import type { Transaction } from "../entities/TransactionEntity"

export interface CreateTransactionRequest extends Partial<Transaction> {
    amout: number,
    date: Date
};

export interface EditTransactionRequest extends Partial<Transaction>{
    id: string
};

/** API response object */
export interface TransactionResponse extends Transaction {};