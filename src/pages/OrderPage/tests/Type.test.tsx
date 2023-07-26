import { render, screen } from '@testing-library/react';
import Type from '../Type';
import { server } from '@/server/server';
import { rest } from 'msw';

test('display product images from server', async () => {
  render(<Type orderType="products" />);
  const productImages = await screen.findAllByRole('img');
  expect(productImages).toHaveLength(2);

  const altText = productImages.map(
    (element) => (element as HTMLImageElement).alt,
  );
  expect(altText).toEqual(['America', 'England']);
});

test('fetch error', async () => {
  server.resetHandlers(
    rest.get('/products', (_, res, ctx) => void res(ctx.status(500))),
  );

  render(<Type orderType="products" />);
  const errorBanner = await screen.findByTestId('error-banner');
  expect(errorBanner).toHaveTextContent('에러가 발생했습니다.');
});
