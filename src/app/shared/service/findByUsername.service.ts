import { AdminRepository } from "../../features/admin/repositories/admin.repository";

export class FindByUsernameService {
  constructor(private repository: AdminRepository) {}

  public async execute(username: string) {
    const result = await this.repository.getByUsername(username);

    if (!result) {
      return null;
    }
    return result;
  }
}
