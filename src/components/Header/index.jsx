import { Input } from '../../components/Input'
import { FiSearch } from 'react-icons/fi'

import { Container, Profile, Title } from "./styles";
export function Header() {
  return (
    <Container>

      <Title>
        <h1>RocketMovies</h1>
      </Title>

      <Input placeholder="Pesquisar pelo título" icon={FiSearch} maxWidth="300px" />

      <Profile to="/profile">
        <div>
          <strong>Wesley Gonçalves</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/WesleyR10.png" alt="Foto do  usuário" />
      </Profile>

    </Container>
  )
}