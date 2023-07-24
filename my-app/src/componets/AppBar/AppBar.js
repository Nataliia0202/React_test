import { Navigation } from "../Navigation/Navigation";
import { AppHeader } from "./AppBar.styled";
import { MobMenu } from "../MobMenu/MobMenu";

export const AppBar = () => {
    return (
      <AppHeader>
        <Navigation />
        <MobMenu/>
      </AppHeader>
    );
}