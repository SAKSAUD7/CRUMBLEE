export interface Product {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    price: number;
    priceUnit: string;
    category: 'cookie' | 'brownie';
}

export const cookies: Product[] = [
    {
        id: 1,
        title: "Classic Double Choco",
        description: "Rich dark chocolate dough with molten chocolate chips.",
        imagePath: "/images/products/cookie-double-choco.png",
        price: 180 /* INR */,
        priceUnit: 'per box',
        category: 'cookie'
    },
    {
        id: 2,
        title: "Red Velvet Bliss",
        description: "Vibrant red velvet with creamy white chocolate chips.",
        imagePath: "/images/products/cookie-red-velvet.png",
        price: 200 /* INR */,
        priceUnit: 'per box',
        category: 'cookie'
    },
    {
        id: 3,
        title: "White Choco Macadamia",
        description: "Golden baked with premium macadamia nuts.",
        imagePath: "/images/products/cookie-macadamia.png",
        price: 220 /* INR */,
        priceUnit: 'per box',
        category: 'cookie'
    }
];

export const brownies: Product[] = [
    {
        id: 4,
        title: "Midnight Fudge",
        description: "Intensely dark and fudgy, strictly for chocolate lovers.",
        imagePath: "/images/products/brownie-fudge.png",
        price: 250,
        priceUnit: 'per box',
        category: 'brownie'
    },
    {
        id: 5,
        title: "Walnut Crunch",
        description: "Classic fudge base topped with roasted walnuts.",
        imagePath: "/images/products/brownie-walnut.png",
        price: 280,
        priceUnit: 'per box',
        category: 'brownie'
    }
];
