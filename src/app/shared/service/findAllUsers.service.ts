import { AdminRepository } from "../../features/admin/repositories/admin.repository";

export class FindAllUsersService {
  constructor(private repository: AdminRepository) {}

  public async execute() {
    const result = await this.repository.getAll();

    if (!result) {
      return null;
    }

    return result;
  }
}
