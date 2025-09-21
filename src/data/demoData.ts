// Menu categories
export const categories = [
  { id: 'burgers', name: 'Burgers' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'sandwiches', name: 'Sandwiches' },
  { id: 'salads', name: 'Salads' },
  { id: 'grilled', name: 'Grilled' },
  { id: 'seafood', name: 'Seafood' },
  { id: 'sides', name: 'Sides' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'beverages', name: 'Beverages' },
];

// Menu items with real image URLs
export const menuItems = [
  // Burgers
  {
    id: 1,
    name: 'Classic Beef Burger',
    description: 'Premium Angus beef patty with crisp lettuce, ripe tomatoes, red onions, pickles, and our signature sauce',
    price: 12.99,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    featured: true,
  },
  {
    id: 2,
    name: 'BBQ Bacon Burger',
    description: 'Double smoked bacon, aged cheddar, caramelized onions, and smoky BBQ sauce',
    price: 14.99,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800',
    featured: true,
  },
  {
    id: 3,
    name: 'Mushroom Swiss Burger',
    description: 'Sautéed mushrooms, Swiss cheese, garlic aioli on a brioche bun',
    price: 13.99,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?w=800',
    featured: false,
  },
  
  // Pizza
  {
    id: 4,
    name: 'Margherita Pizza',
    description: 'San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil',
    price: 16.99,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
    featured: true,
  },
  {
    id: 5,
    name: 'Pepperoni Deluxe',
    description: 'Double pepperoni, mozzarella, oregano, and our house-made tomato sauce',
    price: 18.99,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800',
    featured: false,
  },
  {
    id: 6,
    name: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, red onions, cilantro, mozzarella, and tangy BBQ sauce',
    price: 19.99,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
    featured: true,
  },
  
  // Pasta
  {
    id: 7,
    name: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with pancetta, egg yolk, pecorino romano, and black pepper',
    price: 14.99,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
    featured: true,
  },
  {
    id: 8,
    name: 'Penne Arrabbiata',
    description: 'Spicy tomato sauce with garlic, red chili flakes, and fresh parsley',
    price: 12.99,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',
    featured: false,
  },
  {
    id: 9,
    name: 'Fettuccine Alfredo',
    description: 'Creamy parmesan sauce with butter and fresh cracked pepper',
    price: 13.99,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800',
    featured: false,
  },
  
  // Sandwiches
  {
    id: 10,
    name: 'Club Sandwich',
    description: 'Triple-decker with turkey, bacon, lettuce, tomato, and mayo',
    price: 11.99,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800',
    featured: true,
  },
  {
    id: 11,
    name: 'Philly Cheesesteak',
    description: 'Thinly sliced ribeye, melted provolone, sautéed onions and peppers',
    price: 13.99,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800',
    featured: false,
  },
  {
    id: 12,
    name: 'Grilled Chicken Panini',
    description: 'Marinated chicken breast, roasted peppers, mozzarella, and pesto',
    price: 10.99,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=800',
    featured: false,
  },
  
  // Salads
  {
    id: 13,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, parmesan, croutons, and our house Caesar dressing',
    price: 9.99,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800',
    featured: false,
  },
  {
    id: 14,
    name: 'Greek Salad',
    description: 'Fresh vegetables, feta cheese, olives, and Mediterranean dressing',
    price: 10.99,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
    featured: true,
  },
  
  // Grilled
  {
    id: 15,
    name: 'Grilled Ribeye Steak',
    description: '12oz USDA Prime ribeye with herb butter and seasonal vegetables',
    price: 32.99,
    category: 'grilled',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800',
    featured: true,
  },
  {
    id: 16,
    name: 'BBQ Ribs',
    description: 'Full rack of tender pork ribs with our signature BBQ glaze',
    price: 24.99,
    category: 'grilled',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
    featured: true,
  },
  {
    id: 17,
    name: 'Grilled Chicken Breast',
    description: 'Herb-marinated chicken with lemon butter sauce',
    price: 16.99,
    category: 'grilled',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800',
    featured: false,
  },
  
  // Seafood
  {
    id: 18,
    name: 'Grilled Salmon',
    description: 'Atlantic salmon with dill sauce and asparagus',
    price: 22.99,
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800',
    featured: true,
  },
  {
    id: 19,
    name: 'Fish & Chips',
    description: 'Beer-battered cod with crispy fries and tartar sauce',
    price: 15.99,
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800',
    featured: false,
  },
  {
    id: 20,
    name: 'Shrimp Tacos',
    description: 'Grilled shrimp with cabbage slaw and chipotle mayo',
    price: 13.99,
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800',
    featured: false,
  },
  
  // Sides
  {
    id: 21,
    name: 'French Fries',
    description: 'Hand-cut fries with sea salt',
    price: 4.99,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800',
    featured: false,
  },
  {
    id: 22,
    name: 'Onion Rings',
    description: 'Beer-battered onion rings with ranch dip',
    price: 5.99,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800',
    featured: false,
  },
  {
    id: 23,
    name: 'Mozzarella Sticks',
    description: 'Breaded mozzarella with marinara sauce',
    price: 7.99,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=800',
    featured: false,
  },
  
  // Desserts
  {
    id: 24,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
    price: 7.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800',
    featured: true,
  },
  {
    id: 25,
    name: 'New York Cheesecake',
    description: 'Classic cheesecake with berry compote',
    price: 6.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1533134242066-d0f3b594c59f?w=800',
    featured: false,
  },
  {
    id: 26,
    name: 'Tiramisu',
    description: 'Traditional Italian dessert with espresso and mascarpone',
    price: 7.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
    featured: false,
  },
  
  // Beverages
  {
    id: 27,
    name: 'Craft Beer Selection',
    description: 'Ask your server about our rotating taps',
    price: 5.99,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800',
    featured: false,
  },
  {
    id: 28,
    name: 'Fresh Juice',
    description: 'Orange, apple, or grapefruit',
    price: 4.99,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800',
    featured: false,
  },
  {
    id: 29,
    name: 'Iced Coffee',
    description: 'Cold brew coffee with milk and ice',
    price: 3.99,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800',
    featured: false,
  },
];

// Customers
export const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    joinDate: '2023-01-15',
    totalOrders: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(555) 987-6543',
    joinDate: '2023-02-20',
    totalOrders: 3,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '(555) 456-7890',
    joinDate: '2023-03-10',
    totalOrders: 2,
  },
];

// Orders
export const orders = [
  {
    id: 1001,
    customerId: 1,
    date: '2023-05-15',
    status: 'completed',
    total: 12.45,
    items: [
      { productId: 1, quantity: 2, price: 2.99 },
      { productId: 3, quantity: 1, price: 1.49 },
      { productId: 4, quantity: 1, price: 3.49 },
    ],
  },
  {
    id: 1002,
    customerId: 2,
    date: '2023-05-16',
    status: 'completed',
    total: 8.47,
    items: [
      { productId: 2, quantity: 2, price: 1.99 },
      { productId: 5, quantity: 1, price: 2.49 },
    ],
  },
  {
    id: 1003,
    customerId: 3,
    date: '2023-05-17',
    status: 'pending',
    total: 15.94,
    items: [
      { productId: 6, quantity: 3, price: 2.99 },
      { productId: 1, quantity: 1, price: 2.99 },
      { productId: 4, quantity: 1, price: 3.49 },
    ],
  },
];

// Generate sample data for charts
export const getSalesData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map(day => ({
    name: day,
    sales: Math.floor(Math.random() * 1000) + 500,
  }));
};

export const getProductSales = () => {
  return menuItems.map(item => ({
    name: item.name,
    sales: Math.floor(Math.random() * 100) + 10,
  })).slice(0, 5);
};

export const getPopularItems = () => {
  return menuItems
    .map(item => ({
      name: item.name,
      value: Math.floor(Math.random() * 100) + 10,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
};
