import React from "react";

const ProductRow = ({ productKey, name, price, stocked }) => {
  // the same as: const {productKey, name, price} = props;
  return (
    <tr key={productKey} style={{ color: !stocked ? "red" : "" }}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
