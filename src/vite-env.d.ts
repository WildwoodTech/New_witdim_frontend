/// <reference types="vite/client" />

// Incoming axios {data} object
interface HTTPRequestItemAPI {
  success: boolean;
  data: Item[];
}

// {data: {data}} array objects
interface Item {
  id: string;
  product: string;
  manufacturer: string;
  device_type: string;
  serial: string;
  condition: string;
  year: string;
}

// Item sent for PUT and POST requests
interface FormItem {
  product: string;
  manufacturer: string;
  device_type: string;
  serial: string;
  condition: string;
  year: string;
}
