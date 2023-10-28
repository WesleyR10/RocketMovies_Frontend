/* eslint-disable react/prop-types */
import { Container } from './styles'
import { Tag } from '../Tag'
import star from '../../assets/star.svg'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <span>
        {[...Array(data.note)].map((_, index) => (
          <img key={index} src={star} alt="" />
        ))}
      </span>

      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}