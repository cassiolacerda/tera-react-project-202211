import React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function DrawerMenu(props) {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to={`/users/${currentUser}/posts/new`}>Criar post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
