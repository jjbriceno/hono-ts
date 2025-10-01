import { Hono } from "hono";

import { UserRepository } from "../infrastructure/repositories/UserRepository.impl";
import { CreateUserUseCase } from "../application/use-cases/CreateUser.use-case";
import { UpdateUserPasswordUseCase } from "../application/use-cases/UpdateUserPassword.use-case";

import type { UserRequest } from "../domain/dtos/CreateUser.dto";

const userRoutes = new Hono();

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const updateUserPasswordUseCase = new UpdateUserPasswordUseCase(userRepository);

userRoutes.post('/', async (c) => {
    const request = await c.req.json();

    const req_: UserRequest = {
        name: request.name,
        email: request.email,
        password: request.password
    }

    const userResponse = await createUserUseCase.execute(req_);
    return c.json(userResponse);
});

userRoutes.post('/update-password', async (c) => {
    const request = await c.req.json();
    await updateUserPasswordUseCase.execute(request);
    return c.json({ message: 'Password updated successfully' });
});

export default userRoutes;