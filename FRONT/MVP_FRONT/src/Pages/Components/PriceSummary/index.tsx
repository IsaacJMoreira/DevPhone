import { useState } from 'react';
import {
  PriceSummaryContainer,
  PriceLabel,
  PriceInput,
} from './styled';

export default function PriceSummary() {
  const [subtotal, setSubtotal] = useState('');

  const frete = '30,00';

  const calculateTotal = () => {
    const subtotalValue = parseFloat(subtotal.replace(',', '.')) || 0;
    const freteValue = parseFloat(frete.replace(',', '.')) || 0;

    
    if (subtotalValue > 0) {
      return (subtotalValue + freteValue).toFixed(2).replace('.', ',');
    } else {
      return ''; 
    }
  };

  const handleSubtotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^0-9,.]/g, '');
    setSubtotal(sanitizedValue);
  };

  return (
    <PriceSummaryContainer>
      <PriceLabel>Subtotal:</PriceLabel>
      <PriceInput
        type="text"
        value={subtotal}
        onChange={handleSubtotalChange}
      />

      <PriceLabel>Frete:</PriceLabel>
      <div>R$ {frete}</div>

      <PriceLabel>Total:</PriceLabel>
      <div>{`R$ ${calculateTotal()}`}</div>
    </PriceSummaryContainer>
  );
}
