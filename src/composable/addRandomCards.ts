import { ShortCardProps } from '../../src/components/ShortCard/ShortCard';

export const addRandomCards = (count: number, max?: number): ShortCardProps[] => {
  const maxId = 10000;

  const randomList: ShortCardProps[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * (max || maxId));

    const randomCard: ShortCardProps = {
      image: 'https://placeholder.apptor.studio/150/150/product1.png',
      price: randomIndex,
      title: `Товар ${randomIndex}`,
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random',
      id: `${randomIndex}`,
      onClick: () => console.log(randomIndex),
    };
    randomList.push(randomCard);
  }

  return randomList as ShortCardProps[];
};
