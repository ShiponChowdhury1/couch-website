// Category Type
export interface Category {
  id: number;
  title: string;
  img: string;
}

// Categories Data
export const categories: Category[] = [
  { id: 1, title: 'Sofa', img: '/categories/sofa.png' },
  { id: 2, title: 'Table', img: '/categories/table.png' },
  { id: 3, title: 'Dining Chair', img: '/categories/diningChair.png' },
  { id: 4, title: 'Bed', img: '/categories/bed.png' },
  { id: 5, title: 'Desk', img: '/categories/desk.png' },
  { id: 6, title: 'Dining Table', img: '/categories/diningTable.png' },
  { id: 7, title: 'Cabinet', img: '/categories/cabinet.png' },
  { id: 8, title: 'Wardrobe', img: '/categories/wardrobe.png' },
  { id: 9, title: 'Accessories', img: '/categories/accessories.png' },
];





export const bundles = [
  { id: 1, title: 'Living Room', img: '/discover/modernSofaDecoration.png' },
  { id: 2, title: 'Bedroom', img: '/discover/sofaDecoration.png' },
  { id: 3, title: 'Dining Room', img: '/discover/diningRoom.png' },
];


// comfort zone data ok 
 export const comfortZone = [
    { id: 1, title: 'comfort Chair ', price: 20, buyPrice: 150, rating: 4, img: '/comfort/comfortChair.png' },
    { id: 2, title: 'Comfort Sofa', price: 20, buyPrice: 150, rating: 4, img: '/comfort/comfortSofa (1).png' },
    { id: 3, title: 'Wooden Chair ', price: 20, buyPrice: 150, rating: 4, img: '/comfort/modernWoodenChair.png' },
    { id: 4, title: 'Modern Sofa', price: 20, buyPrice: 150, rating: 4, img: '/comfort/modernComfortSofa.png' },
  ];


   export const featuredItems = [
    { id: 1, title: 'Generated Working Table ', price: 20, buyPrice: 150, rating: 4, img: '/featured/generatedWorkingTable.png' },
    { id: 2, title: 'Modern Study Table', price: 20, buyPrice: 150, rating: 4, img: '/featured/modernTable.png' },
    { id: 3, title: 'Study Table ', price: 20, buyPrice: 150, rating: 4, img: '/featured/studyTable.png' },
    { id: 4, title: 'Working Table', price: 20, buyPrice: 150, rating: 4, img: '/featured/workingTable.png' },
  ];