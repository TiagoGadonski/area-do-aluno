"use client";
import MenuNav from "@/Components/Menu/Menu";
import { ContainerNav, ContainerImagem, GlobalStyle, Container } from "./style";

export default function DashboardPage() {
  return (
    <>
      <GlobalStyle />
      <ContainerNav>
        <MenuNav></MenuNav>
      </ContainerNav>
      <ContainerImagem></ContainerImagem>
      <Container>
        <div>Conteúdo parte 1</div>
        <div>Conteúdo parte 2</div>
      </Container>
    </>
  );
}
