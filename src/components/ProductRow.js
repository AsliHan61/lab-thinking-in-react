import React from 'react';

function ProdutRow({product}) {
    return (
        <tr>
            <td className={product.inStock ? '' : 'out-of-stock'}>{product.name}</td>
        </tr>
    );
}

export default ProdutRow;