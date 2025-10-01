import type { IUserRepository } from "../../domain/repository-ports/UserRepository";
import type { UpdateUserPassword } from "../../domain/dtos/UpdateUserPassword.dto";

export class UpdateUserPasswordUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(args: UpdateUserPassword): Promise<void> {
        await this.userRepository.updatePassword(args);
    }
}