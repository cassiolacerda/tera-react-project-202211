import React from "react";

import logo from "../../images/logo.svg";

export default function UserPostForm() {
  return (
    <div className="wrapper">
      <div className="app-header">
        <div className="app-header__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>

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

      <div className="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  );
}
