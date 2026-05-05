export interface ParkingSpace {
  id: string;
  title: string;
  address: string;
  pricePerHour: number;
  lat: number;
  lng: number;
  slots: number;
  amenities: string[];
  image: string;
  rating: number;
  isAvailable: boolean;
}

export const MOCK_SPACES: ParkingSpace[] = [
  {
    id: "1",
    title: "MG Road Premium Parking",
    address: "MG Road, Kochi, Kerala",
    pricePerHour: 40,
    lat: 9.972412,
    lng: 76.285812,
    slots: 12,
    amenities: ["CCTV", "E-Vehicle Charging", "24/7 Access"],
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    isAvailable: true,
  },
  {
    id: "2",
    title: "Fort Kochi Heritage Slot",
    address: "Princess St, Fort Kochi, Kochi",
    pricePerHour: 30,
    lat: 9.9658,
    lng: 76.2421,
    slots: 5,
    amenities: ["Shaded", "Nearby Cafes"],
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    isAvailable: true,
  },
  {
    id: "3",
    title: "Calicut Beach Front Parking",
    address: "Beach Rd, Kozhikode, Kerala",
    pricePerHour: 25,
    lat: 11.2588,
    lng: 75.7804,
    slots: 20,
    amenities: ["Safe Zone", "Wide Slots"],
    image: "https://images.unsplash.com/photo-1590674852885-ce199562a11b?auto=format&fit=crop&q=80&w=800",
    rating: 4.2,
    isAvailable: true,
  },
  {
    id: "4",
    title: "Trivandrum City Center",
    address: "Overbridge, Trivandrum, Kerala",
    pricePerHour: 50,
    lat: 8.489,
    lng: 76.949,
    slots: 8,
    amenities: ["Valet", "Security Guard"],
    image: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    isAvailable: false,
  },
];

export const MOCK_BOOKINGS = [
  {
    id: "B-001",
    spaceTitle: "MG Road Premium Parking",
    date: "2026-03-28",
    status: "Confirmed",
    amount: 120,
  },
  {
    id: "B-002",
    spaceTitle: "Fort Kochi Heritage Slot",
    date: "2026-03-27",
    status: "Completed",
    amount: 90,
  },
];
