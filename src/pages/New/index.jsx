import { FiArrowLeft } from 'react-icons/fi'
import { Header } from "../../components/Header"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"


import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText icon={FiArrowLeft} title="Voltar" to="/">  </ButtonText>
            <h1>Novo Filme</h1>
          </header>

          <div className='inputs'>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Novo Marcador" />
            </div>
          </Section>

          <div className='buttons'>
            <Button title="Excluir filme" />
            <Button title="Salvar Alterações" />
          </div>
        </Form>
      </main>

    </Container>
  )
}