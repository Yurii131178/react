interface ProductProps {
    name: string;
    imgUrl: string;
    price: number;
};


export default function Product({name, imgUrl, price}: ProductProps) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={imgUrl} alt={name} />
            <p /*style={{color: "red"}}*/>Price: {price} credits</p>
        </div>
    );
}

// ========Cтилізація компонентів============
// вбудований стиль style = {{ color: "red"}}
/**
 * Швидко, але обмежено.
 * Не підтримує псевдокласи та медіазапити.
 * Погано масштабується.
 */