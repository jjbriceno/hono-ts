import type { IUserRepository } from "../../domain/repository-ports/user-repository";
import type { UpdateUserPassword } from "../../domain/dtos/update-user-password.dto";

export class UpdateUserPasswordUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(args: UpdateUserPassword): Promise<void> {
        await this.userRepository.updatePassword(args);
    }
}