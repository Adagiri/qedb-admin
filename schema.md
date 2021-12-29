- Admin
  -id: Str
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

**ShippingAddresses**

- customerId: Str
- address
  country: Str
  state: Str
  city: Str
  street: Str}
  created_at

**Customers**

- id: Str
- name: Str
- email: Str
- hasNewsLetter: Bool
- password

**Products**

- id: Str
- images: [Str]
- name: Str
- price: Float
- width: Float
- height: Float
- weight: Float
- categories: [Str]
- stock: Int
- sales: Int
- description: Str
- isAvailable: Bool- oauth_id: Str

**Orders**

- date: Date
- ref: Str
- customer
  id: Str
  reference: Str
  email: Str
- address
  country: Str
  state: Str
  city: Str- oauth_id: Str
celled]
- returned: Bool
- items [Array]
  id: Str
  name: Str
  price: Float
  quantity: Int
- deliveryFee: Float

**Invoices**
- date: Date
- customer
  id: Str
  name: Str
- order
  ref: Str
  id: Str
- address
  country: Str
  state: Str
  city: Str
  street: Str
- deliveryFee: Float

**Reviews**

- customer
  id: Str
  name: Str
  email: Str
- product
  id: Str
  name: Str
- date: Date
- rating: Int [1 - 5]
- comment: Str
- accepted: Bool
- featured: Bool
