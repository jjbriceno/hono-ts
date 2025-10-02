import { z } from '@hono/zod-openapi';
import { ZodType } from 'zod';

import type { Transaction } from '../entities/transaction.entity';

export const CreateTransactionRequest = z.object({
    id: z.string()
        .openapi({ example: '1' }),
    amount: z.number({
        error: 'validation_error',
        message: 'El monto debe ser un número.',
    }).positive({
        error: 'validation_error',
        message: 'El monto debe ser un valor positivo.',
    }).openapi({ example: 1000 }),
    description: z.string().min(3, {
        error: 'validation_error',
        message: 'La descripción debe tener al menos 3 caracteres.',
    }).max(100, {
        error: 'validation_error',
        message: 'La descripción debe tener como máximo 100 caracteres.',
    })
        .optional()
        .openapi({ example: 'Pago de servicios' }),
    date: z.date({
        error: 'validation_error',
        message: 'La fecha debe ser una fecha válida.',
    }).openapi({ example: new Date() }),
}) satisfies ZodType<Transaction>;

export type CreateTransactionRequest = z.infer<typeof CreateTransactionRequest>;
