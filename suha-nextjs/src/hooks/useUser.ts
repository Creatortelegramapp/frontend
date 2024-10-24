// hooks/useUser.ts

import { useState } from 'react';
import {IUser} from "@/models/user.model";
import UsersService from "@/services/user.service";

interface UseUserResult {
    updateUser: (id: number, userData: Partial<IUser>) => Promise<void>;
    loading: boolean;
    error: string | null;
}

const useUser = (): UseUserResult => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const updateUser = async (id: number, userData: Partial<IUser>): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            await UsersService.updateUser(id, userData);
        } catch (err: any) {
            setError(err.message || 'An error occurred while updating the user.');
        } finally {
            setLoading(false);
        }
    };

    return {
        updateUser,
        loading,
        error,
    };
};

export default useUser;
