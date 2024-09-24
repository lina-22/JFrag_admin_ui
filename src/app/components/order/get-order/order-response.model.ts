// order.model.ts

// Define the OrderDetailsResponseDto interface (if it has specific properties, add them)
export interface OrderDetailsResponseDto {
  // Add properties relevant to the order details if needed
}

// Define the Order interface
export interface Order {
  id: number;
  email: string;
  phone: string | null;
  status: string;
  address: string;
  orderRef: string;
  lastName: string;
  total: number | null; // Assuming total can also be null
  firstName: string;
  deliveryAddress: string;
  createdAt: string;
  updatedAt: string;
  orderDetailsResponseDtos: OrderDetailsResponseDto[] | null; // Assuming this could be an array
}

// Define the OrderResponse interface
export interface OrderResponse {
  content: Order[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  hasNext: boolean;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  hasContent: boolean;
  empty: boolean;
}
