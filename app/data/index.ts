export interface ExperienceItem {
  title: string;
  description: string;
  imageUrl: string;
  photos?: string[]; // Array of additional photos for slide deck
  bottomText: string; // Text to display at the bottom of each card
  modalBottomText: string; // Text to display at the bottom of the modal
}

export const experienceData: ExperienceItem[] = [
  {
    title: 'Life',
    description: 'Yolo is a mindset, yolo is a lifestyle, be free!!',
    imageUrl: '/funimage1.jpg',
    bottomText: 'Adventures & Memories',
    modalBottomText: 'Every moment is a chance to create unforgettable memories and embrace the beauty of living life to the fullest.',
    photos: [
      '/img for life folder/l1.JPG',
      
      '/img for life folder/l2.JPG',
      '/img for life folder/l3.JPG',
      '/img for life folder/l4.JPG',
      '/img for life folder/l5.JPG',
      '/img for life folder/l6.JPG',
      '/img for life folder/l12.JPG',
      '/img for life folder/l13.JPG',
      '/img for life folder/l14.JPG',
      '/img for life folder/l15.JPG',
      '/img for life folder/l16.JPG'
    ],
  },
  {
    title: 'People',
    description: '',
    imageUrl: '/funimage2.webp',
    bottomText: 'Family & Friends',
    modalBottomText: '',
    photos: [
      '/images for people deck/2.JPG',
      '/images for people deck/1.jpeg',
      '/images for people deck/3.JPG',
      '/images for people deck/4.JPG',
      '/images for people deck/5.JPG',
      '/images for people deck/6.jpeg',
      '/images for people deck/7.JPG',
      '/images for people deck/8.jpeg',
      '/images for people deck/9.JPG',
      '/images for people deck/10.JPG',
      '/images for people deck/11.jpeg',
      '/images for people deck/12.jpeg',
     
    ],
  },
  {
    title: 'Skills',
    description: 'being awesome comes with the burden of kids tackling you as they try to rip your awesomeness away for themselves. Tuff life but we continue on',
    imageUrl: '/funimage3.jpg',
    bottomText: 'Talents & Achievements',
    modalBottomText: 'Continuous growth and learning new skills keeps life exciting and opens doors to endless possibilities and adventures.',
    photos: [
      '/img for skills deck/IMG_8522.jpeg',
      '/img for skills deck/IMG_0503.JPG',
      '/img for skills deck/IMG_3459.JPG',
      '/img for skills deck/IMG_5089.JPG',
      '/img for skills deck/IMG_5099.JPG',
      '/img for skills deck/IMG_5154.JPG',
      '/img for skills deck/IMG_5950.JPG',
      '/img for skills deck/IMG_6188.jpeg'
    ],
  },
];

