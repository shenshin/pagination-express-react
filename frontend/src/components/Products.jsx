import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';

const Products = () => {
  const pageNumber = useParams().pageNumber || 1;
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(`/api/products/?pageNumber=${pageNumber}`);
        if (!response.ok) throw new Error(response.statusText);
        const products = await response.json();
        setProductList(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [pageNumber]);

  return (
    <div>
      {error ? (<p>{error}</p>)
        : loading ? (<p>Loading...</p>)
          : productList && (
          <>
            <Pagination page={pageNumber} totalPages={productList.pages} />
            {productList.products.map((product, i) => {
              // figure out how many items skipped
              const shift = (productList.pageNumber - 1) * productList.pageSize;
              return (
                <p key={product.id}>{`${shift + i + 1}. ${product.brand} ${product.category} ${product.name}`}</p>
              );
            })}
          </>
          )}

    </div>
  );
};

export default Products;
