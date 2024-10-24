// services/httpClient.ts

export interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: HeadersInit;
    body?: any;
}

export interface ErrorResponse {
    message: string;
    status?: number;
    data?: any;
}

export class HttpClient {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
        const { method = 'GET', headers = {}, body } = options;

        const config: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        };

        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, config);

            if (!response.ok) {
                const errorData = await response.json();
                const error: ErrorResponse = new Error(errorData.message || 'HTTP error');
                error.status = response.status;
                error.data = errorData;
                throw error;
            }

            return response.json() as Promise<T>;
        } catch (error) {
            // Rethrow the error for the caller to handle
            throw error;
        }
    }
}

export default HttpClient;
