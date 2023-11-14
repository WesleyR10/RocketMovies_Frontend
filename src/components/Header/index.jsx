/* eslint-disable react/prop-types */
import { Input } from '../../components/Input'
import { FiSearch } from 'react-icons/fi'
import { Container, Profile, Title } from "./styles";
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/auth';


export function Header({ filterMovies }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>

      <Title>
        <h1>RocketMovies</h1>
      </Title>

      <Input placeholder="Pesquisar pelo título" icon={FiSearch} maxwidth="300px" onChange={filterMovies} />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <span onClick={handleSignOut}>Sair</span>
        </div>
        <img src={avatarUrl} alt={user.name} />
      </Profile>

    </Container>
  )
}