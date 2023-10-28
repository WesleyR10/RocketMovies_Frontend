import { Container } from "./styles";


// eslint-disable-next-line react/prop-types
export function Button({ title, icon: Icon, loading = false, ...rest }) {

  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {Icon && < Icon size={20} />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
