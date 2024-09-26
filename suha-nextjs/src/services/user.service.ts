// services/UsersService.ts
import HttpClient from './httpClient';
import {IUser} from "@/models/user.model";

class UsersService extends HttpClient {
    constructor() {
        super(process.env.NEXT_PUBLIC_API_BASE_URL as string);
    }

    updateUser(id: number, userData: Partial<IUser>): Promise<IUser> {
        return this.request<IUser>(`/users/${id}`, {
            method: 'PUT',
            body: userData,
        });
    }
}

export default new UsersService() as UsersService;
