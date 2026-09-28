export type Room = {
  name: string;
  capacity: string;
  price: string;
};

export type RoomGroup = {
  id: string;
  title: string;
  description: string;
  amenities: string[];
  note?: string;
  rooms: Room[];
};

export const roomGroups: RoomGroup[] = [
  {
    id: "main",
    title: "Main Resort",
    description:
      "Steps from the shore, every Main Resort room comes with air-conditioning, its own bathroom, and a private balcony.",
    amenities: ["Air-conditioning", "Own Bathroom", "Private Balcony", "FREE Infinity Pool & Beach Access"],
    rooms: [
      { name: "Room 1", capacity: "2 pax", price: "₱3,000" },
      { name: "Room 2", capacity: "3 pax", price: "₱3,500" },
      { name: "Room 3", capacity: "3 pax", price: "₱3,500" },
      { name: "Room 4", capacity: "6-7 pax", price: "₱7,000" },
      { name: "Room 5", capacity: "10-20 pax", price: "₱12,000" },
      { name: "Room 6", capacity: "4-5 pax", price: "₱5,000" },
      { name: "Room 7", capacity: "4-5 pax", price: "₱5,000" },
    ],
  },
  {
    id: "annex",
    title: "Annex",
    description: "A quieter cluster just beside the Main Resort, with its own pool and easy beach access.",
    amenities: ["Air-conditioning", "Balcony", "FREE Pool & Beach Access"],
    note: "Additional fees apply for Annex bookings: ₱25 entrance fee per head, plus parking fee.",
    rooms: [
      { name: "Room A", capacity: "3-5 pax", price: "₱4,000" },
      { name: "Room B", capacity: "10 pax", price: "₱6,000" },
      { name: "Room C", capacity: "10 pax", price: "₱6,000" },
    ],
  },
];

export const rooms = roomGroups.flatMap((g) => g.rooms);
