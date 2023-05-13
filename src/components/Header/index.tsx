import React from "react";
import {
  HeaderDefault,
  ListDefault,
  ListItem,
  InputDefault,
  Logo,
} from "./Style";
import ImageLink from "../ImageLink";

export default function Header() {
  return (
    <HeaderDefault>
      <Logo src="../../../assets/images/logo-com-nome.png" alt="Logo" />

      <ListDefault>
        <ListItem>
          <a href="/Produtos">Produtos</a>
        </ListItem>
        <ListItem>
          <a href="/about">Stories</a>
        </ListItem>
        <ListItem>
          <a href="/contact">About</a>
        </ListItem>
      </ListDefault>

      <InputDefault type="text" placeholder="Faça sua pesquisa aqui" />

      <ListDefault>
        <ListItem>
          <ImageLink
            src="../../../assets/icons/carrinho.png"
            alt="icone de carrinho"
            href="/carrinho"
          />
        </ListItem>
        <ListItem>
          <a href="/login">Login</a>
        </ListItem>
      </ListDefault>
    </HeaderDefault>
  );
}
