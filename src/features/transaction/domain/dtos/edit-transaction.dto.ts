import type { Transaction } from "@features/transaction/domain/entities/transaction.entity";

import type { CreateTransactionRequest } from "./create-transaction.dto";

export interface EditTransactionRequest extends Partial<CreateTransactionRequest>{
    id: string
};