import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
        throw new Error('Something went wrong!');
    }
    return res.json();
};

export const useProducts = () => {
    return useQuery({ queryKey: ['products'], queryFn: fetchProducts });
};