declare const usePromPromiseQuery: <T>(fetchFn?: () => Promise<T>) => {
    data: T;
    error: string;
    execute: (fn?: () => Promise<T>) => Promise<T>;
    loading: boolean;
    onRefetch: () => Promise<T>;
};
export { usePromPromiseQuery };
