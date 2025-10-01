import { IUserRepository } from "../../domain/repository-ports/UserRepository";
import { UserRequest, UserResponse } from "../../domain/dtos/CreateUser.dto";

import type { User } from "../../domain/entities/UserEntity";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    public async execute(request: UserRequest): Promise<UserResponse> {

        if(!request.email) {
            throw new Error('Email is required');
        }

        const user: User = {
            id: crypto.randomUUID(),
            name: request.name,
            email: request.email,
            password: request.password
        };

        await this.userRepository.save(user);

        const userResponse: UserResponse = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        return userResponse;
    }
}