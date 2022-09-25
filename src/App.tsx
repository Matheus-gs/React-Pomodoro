import { GlobalStyle, Container } from "./styles/global";
import { Router } from './Router'

export function App() {
  return (
    <Container>
      <Router />
      <GlobalStyle />
    </Container>
  )
}

