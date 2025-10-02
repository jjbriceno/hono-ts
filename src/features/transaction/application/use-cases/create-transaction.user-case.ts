import type { TransactionResponse } from "@transaction/domain/dtos/transaction-response";
import type { CreateTransactionRequest } from "@transaction/domain/dtos/create-transaction.dto";

import { ITransactionRepository } from "@transaction/domain/repository-ports/transaction.repository";

export class CreateTransactionUserCase {
    constructor(private transactionRepository: ITransactionRepository){}

    public async execute(request: CreateTransactionRequest): Promise<TransactionResponse> {
        
        if (request.amount && request.amount < 0) {
            throw new Error('El monto debe ser un valor positivo.')
        }

        const transaction: CreateTransactionRequest = {
            id: "1",
            amout: request.amount!,
            description: request.description,
            date: new Date,
        }

        const response: TransactionResponse = 
            await this.transactionRepository.save(transaction);

        return response;
    }
}