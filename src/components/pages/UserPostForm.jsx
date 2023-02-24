import React from "react";

import Default from "../templates/Default";

export default function UserPostForm() {
  return (
    <Default>
      <div className="create-post">
        <h1>Criar</h1>

        <form className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Título</label>
            <input type="text" id="name" name="title" />
          </div>
          <div className="create-post__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea name="content" id="content"></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
