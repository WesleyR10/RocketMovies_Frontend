import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth';

import { FiArrowLeft, FiClock } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import star from '../../assets/star.svg'
import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'

export function Details() {
  const { user } = useAuth()
  const [data, setData] = useState(null)

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }
    fetchNote()
  }, [])

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Header />
      {data &&
        <main>
          <Content>
            <ButtonText icon={FiArrowLeft} title="Voltar" onClick={handleBack} />

            <h1> {data.title}   {[...Array(data.rating)].map((_, index) => (
              <img key={index} src={star} alt="" />
            ))}
            </h1>

            <div className='user'>
              <img src={avatarUrl} alt={user.name} />
              <span>{user.name}</span>
              <span><FiClock /></span>
              <span>{data.created_at}</span>
            </div>

            {data.tags &&
              <Section>
                {data.tags.map(tag => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </Section>
            }

            <p>{data.description}</p>
          </Content>
        </main>
      }
    </Container>
  )
}

