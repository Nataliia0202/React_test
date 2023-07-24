import { useState } from "react";
import {
  MobMenuOpenButton,
  MobMenuWrap,
  MobMenuCloseButton,
} from "./MobMenu.styled";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const MobMenu = () => {
    const [show, setShow] = useState(false);

    const handleToggleShow = () => {
        setShow(!show);
    }

    return (
      <>
        <MobMenuOpenButton onClick={handleToggleShow}>
          <MenuIcon sx={{ width: "36px", height: "40px" }} />
        </MobMenuOpenButton>
        {show && (
          <MobMenuWrap>
            <MobMenuCloseButton onClick={handleToggleShow}>
              <CloseIcon sx={{ width: "36px", height: "40px" }} />
            </MobMenuCloseButton>
          </MobMenuWrap>
        )}
      </>
    );
}