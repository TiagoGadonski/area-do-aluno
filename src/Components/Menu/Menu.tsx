"use client";
import React, { useState } from "react";
import { StyledMenu } from "./style";

const MenuNav: React.FC<any> = () => {
  return (
    <StyledMenu>
      <div>
        <p>Curso atual: {"Engenharia de software"}</p>
      </div>
      <div>
        <p>Alterar curso</p>
      </div>
    </StyledMenu>
  );
};

export default MenuNav;
