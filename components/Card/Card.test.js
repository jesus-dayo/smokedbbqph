import { render, screen } from '../../test-utils';
import React from 'react';
import Card from './Card';
import { MAX_RIBS } from '../../common/staticConfigs';

beforeEach(() => {
  jest.mock('uuid', () => 'eb7b7961-395d-4b4c-afc6-9ebcadaf0150');
});

const setup = ({
  label,
  originalPrice,
  price,
  imgSrc,
  description,
  availableQuantity,
  productId,
  isFrozen,
  max,
}) => {
  return render(
    <Card
      label={label}
      originalPrice={originalPrice}
      price={price}
      imgSrc={imgSrc}
      description={description}
      availableQuantity={availableQuantity}
      productId={productId}
      isFrozen={isFrozen}
      max={max}
    />
  );
};

describe('Displaying Quantity', () => {
  it('should display Sold Out if availableQuantity is 0', () => {
    setup({
      label: 'test',
      originalPrice: 1000,
      price: 1100,
      imgSrc: null,
      description: 'test',
      availableQuantity: 0,
      productId: '123',
      isFrozen: false,
      max: 0,
    });
    expect(screen.getByText('Sold Out')).toBeInTheDocument();
  });
  it('should display Sold Out if max === max_ribs', () => {
    setup({
      label: 'test',
      originalPrice: 1000,
      price: 1100,
      imgSrc: null,
      description: 'test',
      availableQuantity: 10,
      productId: '123',
      isFrozen: false,
      max: MAX_RIBS,
    });
    expect(screen.getByText('Sold Out')).toBeInTheDocument();
  });
  it('should not display Sold Out if max !== max_ribs', () => {
    setup({
      label: 'test',
      originalPrice: 1000,
      price: 1100,
      imgSrc: null,
      description: 'test',
      availableQuantity: 10,
      productId: '123',
      isFrozen: false,
      max: MAX_RIBS - 1,
    });
    expect(screen.queryByText('Sold Out')).not.toBeInTheDocument();
  });
  it('should not display Sold Out if frozen', () => {
    setup({
      label: 'test',
      originalPrice: 1000,
      price: 1100,
      imgSrc: null,
      description: 'test',
      availableQuantity: 10,
      productId: '123',
      isFrozen: true,
      max: MAX_RIBS,
    });
    expect(screen.queryByText('Sold Out')).not.toBeInTheDocument();
  });
});
