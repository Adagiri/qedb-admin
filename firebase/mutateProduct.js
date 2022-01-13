export const updateStockStatus = (params) => {
  const { stock } = params.data;
  // Check if these fields are object
  const fields = ['stock_lt', 'stock_gt', 'stock'];

  // stock = 0 ;

  if (stock == 0) {
    params.data.stock_lt = 0;
    params.data.stock_gt = 0;
  } else if (stock !== 0 && stock <= 9) {
    params.data.stock_lt = 10;
    params.data.stock_gt = 0;
  } else if (stock >= 10 && stock <= 49) {
    params.data.stock_lt = 50;
    params.data.stock_gt = 10;
  } else {
    params.data.stock_gt = 49;
  }

  // stock !== 0 && stock <= 9

  // stock >= 10 && stock <= 49

  // stock > 50
};
