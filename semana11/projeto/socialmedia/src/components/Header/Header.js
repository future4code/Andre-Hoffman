import { AppBar, Button, Toolbar } from "@material-ui/core";
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator";
import { StyledToolbar } from "./styled";
import { useHistory } from "react-router";

const Header = () => {

  const history = useHistory()

  return (
    <AppBar position = "static">
      <StyledToolbar>
        <Button onClick={()=> goToLoginPage(history)}color="inherit">LabEddit</Button>
        <Button onClick={()=> goToFeedPage(history)}color="inherit">Go to</Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;