- Products
  id
  title: Str
  description: Str
  images: [Str]
  price: Numb
  prevPrice: Numb
  categories: [Str]
  tags: [Str]
  isAvailable: Bool
  availability_count: Numb
  volumes: Numb
  pages: Numb
  language: [Str]
  commentary: Bool
  commentary_by: Str
  publisher: Str
  weight: Numb
  created_at: Date

- Admin
  name: Str
  address{
  country: Str
  state: Str
  city: Str
  street: Str}
  phone: Str
  email: Str
  password: Str
  username: Str
  recovery_email: Str
  hours: Str

- Staffs
  name: Str
  email: Str
  password: Str
  roles: [Str]

- Customers
  id: Str
  name: Str
  email: Str
  oauth_id: Str
  website_color: Str

- ShippingAddresses
  customer_id: Str
  address: {
  country: Str
  state: Str
  city: Str
  street: Str}
  created_at

- Orders
  product_ids: [Str]
  date
  payed: Bool
  amount_payed: Numb / null
  delivery_fee: Numb 
  enroute
  delivered

