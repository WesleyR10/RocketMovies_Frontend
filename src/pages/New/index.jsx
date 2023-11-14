import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
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

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")
  const [tags, setTags] = useState([]); //Guarda todas as tags
  const [newTag, setNewTag] = useState(""); //Tag que vai ser add no momento

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título da nota.")
    }

    if (!rating) {
      return alert("Digite a Avaliação do filme.")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas nao clicou em adicionar.")
    }

    await api.post("/movies", {
      title,
      rating,
      description,
      tags
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText icon={FiArrowLeft} title="Voltar" onClick={handleBack} />
            <h1>Novo Filme</h1>
          </header>

          <div className='inputs'>
            <Input placeholder="Título" onChange={e => setTitle(e.target.value)} />
            <Input placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)} />
          </div>
          <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                ))
              }
              <NoteItem isNew placeholder="Novo Marcador" value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag} />
            </div>
          </Section>

          <div className='buttons'>
            <Button title="Excluir filme" />
            <Button title="Salvar Alterações" onClick={handleNewMovie} />
          </div>
        </Form>
      </main>

    </Container>
  )
}