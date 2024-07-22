export type Store = {
  id: string;
  name: string;
  description: string;
  address: string;
  image: string;
  createdAt: string;
  manager: Manager;
};

export type Manager = {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  shippingAddress: string;
};

export type IStoreResponse = {
  stores: Store[];
};
