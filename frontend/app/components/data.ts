type ServiveOptionType = {
  title: string;
  price: number;
  subtitle: string;
  highlight: boolean; // Incase further deals are put on, such as 3 visits a day or 4 in a week etc and they want to be highlighted
};

export const serviceOptions : ServiveOptionType[] = [
  {
    title: "1 Visit",
    price: 14,
    subtitle: "Perfect for shorter trips or more independent cats.",
    highlight: false,
  },
  {
    title: "2 Visits",
    price: 18,
    subtitle: "Ideal for cats who need extra attention and routine.",
    highlight: false,
  },
];