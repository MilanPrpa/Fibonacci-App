export const LargeProduct = ({ products }) => {
  const { name, price, description, rating } = products;
  return (
    <>
      <h3 style={{ color: 'green' }}>Product: {name}</h3>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
    </>
  );
};
