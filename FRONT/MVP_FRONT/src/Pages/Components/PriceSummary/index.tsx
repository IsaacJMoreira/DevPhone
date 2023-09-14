import { useState } from 'react';
import {
  PriceSummaryContainer,
  PriceLabel,
  PriceInput,
} from './styled';

function PriceSummary() {
  const [subtotal, setSubtotal] = useState(''); 
  const [frete, setFrete] = useState(''); 

  // Função para calcular o total 
  const calculateTotal = () => {
    const subtotalValue = parseFloat(subtotal.replace(',', '.')) || 0;
    const freteValue = parseFloat(frete.replace(',', '.')) || 0;
    return (subtotalValue + freteValue).toFixed(2).replace('.', ',');
  };

  const handleSubtotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^0-9,.]/g, '');
    setSubtotal(sanitizedValue);
  };

  const handleFreteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^0-9,.]/g, '');
    setFrete(sanitizedValue);
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
      <PriceInput
        type="text"
        value={frete}
        onChange={handleFreteChange}
      />

      <PriceLabel>Total:</PriceLabel>
      <div>{`R$ ${calculateTotal()}`}</div>
    </PriceSummaryContainer>
  );
}

export default PriceSummary;



