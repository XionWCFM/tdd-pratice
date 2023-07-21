import { render, screen } from '@testing-library/react';
import Type from '../Type';

test('display product images from server', async () => {
  render(<Type />);
  const productImages = await screen.findAllByRole('img', {
    name: /product$i/,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map(
    (element) => (element as HTMLImageElement).alt,
  );
  expect(altText).toEqual(['America', 'England']);
});
