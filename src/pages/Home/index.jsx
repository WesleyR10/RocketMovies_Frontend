import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Header'
import { Button } from "../../components/Button";
import { Note } from '../../components/Note';

import { Container, Content } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate()

  function handleNewMovie() {
    navigate("/new")
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function filterMovies(e) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data)
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header filterMovies={filterMovies} />

      <Content>

        <section>
          <h2>Meus filmes</h2>
          <Button title="Adicionar filme" icon={FiPlus} onClick={handleNewMovie} />
        </section>

        <div className='noteMovies'>
          {
            movies.map(movie => (
              < Note key={String(movie.id)} data={movie} onClick={() => handleDetails(movie.id)}
              />))
          }
        </div>
      </Content>
    </Container >
  )
}