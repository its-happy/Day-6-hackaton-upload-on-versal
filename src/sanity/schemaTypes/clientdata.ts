export default {
    name: "checkout",
    type: "document",
    title: "Checkout",
    fields: [
      {
        name: "orderDetails",
        type: "array",
        title: "Order Details",
        of: [
          {
            type: "object",
            fields: [
              { name: "productName", type: "string", title: "Product Name" },
              { name: "productImage", type: "image", title: "Product Image" },
              { name: "quantity", type: "number", title: "Quantity" },
              { name: "price", type: "number", title: "Price" },
              { name: "size", type: "string", title: "Size" },
            ],
          },
        ],
      },
      {
        name: "userDetails",
        type: "object",
        title: "User Details",
        fields: [
          { name: "firstName", type: "string", title: "First Name" },
          { name: "lastName", type: "string", title: "Last Name" },
          { name: "email", type: "string", title: "Email" },
          { name: "phone", type: "string", title: "Phone" },
          { name: "address", type: "string", title: "Address" },
          { name: "postalCode", type: "string", title: "Postal Code" },
          { name: "city", type: "string", title: "City" },
          { name: "state", type: "string", title: "State" },
        ],
      },
      {
        name: "paymentDetails",
        type: "object",
        title: "Payment Details",
        fields: [
          {
            name: "method",
            type: "string",
            title: "Payment Method",
            options: { list: ["Credit Card", "Debit Card"] },
          },
          { name: "cardNumber", type: "string", title: "Card Number" },
          { name: "expiryDate", type: "string", title: "Expiry Date" },
          { name: "cvc", type: "string", title: "CVC" },
        ],
      },
      { name: "totalPrice", type: "number", title: "Total Price" },
      { name: "deliveryDate", type: "string", title: "Delivery Date" },
    ],
  };
  