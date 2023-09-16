import { Container, Word, Line, BoldWord } from './styled';

export default function ProgressBar() {
  return <>
    <Container>
      <Word>Endereço</Word>
      <Line />
      <BoldWord className="envio">Envio</BoldWord>
      <Line />
      <Word>Pagamento</Word>
    </Container>
    </>
};






