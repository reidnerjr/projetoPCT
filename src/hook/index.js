import api from 'services/api';
function CartHook() {
  const Buy = async (product) => {
    const { title, price, picture } = product;
    const response = await api.post('/cart', { title, price, picture });
    return response;
  };
  const Delete = async (id) => {
    const response = await api.delete(`/cart/${id}`);

    return response;
  };

  return { Buy, Delete };
}

export default CartHook;
