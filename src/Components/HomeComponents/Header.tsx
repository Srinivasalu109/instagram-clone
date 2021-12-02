import React, { ReactNode, useState } from "react";
import "../../Styles/HomeStyles/Header.css";
import { Icon, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { AiFillHome } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { MdExplore } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquareFill } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { Image } from "semantic-ui-react";
import buttler from "../../Images/buttler.jpg";

const selection = [false, false, false, false, false];
interface routeType {
  children: ReactNode;
}
const FilledIcons = [
  AiFillHome,
  BsMessenger,
  BsPlusSquareFill,
  MdExplore,
  AiFillHeart,
];
const UnFilledIcons = [
  AiOutlineHome,
  RiMessengerLine,
  FiPlusSquare,
  MdOutlineExplore,
  AiOutlineHeart,
];
export default function Header({ children }: routeType) {
  const [focus, setFocus] = useState<Boolean>(false);
  const [prevSelect, setPrevSelect] = useState<number | undefined>(undefined);
  const handleClick = (index: number) => {
    for (let i = 0; i < 5; i++) {
      selection[i] = false;
    }
    selection[index] = !selection[index];
    setPrevSelect(index);
  };
  return (
    <div>
      <div className="header">
        <div className="menubar">
          <img
            alt="Instagram"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            className="insta_img"
          />
          <div>
            <Input
              icon
              placeholder="Search"
              iconPosition={focus ? undefined : "left"}
            >
              <input />
              <Icon name="search" />
            </Input>
          </div>
          <div className="menu_icons">
            {Array(5)
              .fill(" ")
              .map((_, index) => {
                const UnFilledIcon = UnFilledIcons[index];
                const FilledIcon = FilledIcons[index];

                return (
                  <div>
                    {!selection[index] ? (
                      <UnFilledIcon
                        size={40}
                        className="icon"
                        onClick={() => handleClick(index)}
                      />
                    ) : (
                      <FilledIcon
                        size={40}
                        className="icon"
                        onClick={() => handleClick(index)}
                      />
                    )}
                  </div>
                );
              })}
            <img src={buttler} className="profile_image" alt="buttler" />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
