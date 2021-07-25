import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import EditorRemoveIcon from "@atlaskit/icon/glyph/editor/remove";
import EditIcon from "@atlaskit/icon/glyph/edit";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
  &,
  &:hover {
    ${(p) =>
      p.isCompleted &&
      css`
        text-decoration: line-through;
      `}
  }
  &:hover {
    .check-icon,
    .delete-icon {
      display: inline-block;
    }
  }
  .check-icon {
    display: none;
    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }

  .delete-icon {
    float: right;
    margin-top: 4px;
    display: none;
    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }

  .edit-icon {
    float: right;
    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

export default function Todo({
  todo,
  onCheckBtnClick,
  onDeleteBtnClick,
  onEditBtnClick,
}) {
  return (
    <ButtonStyled
      isCompleted={todo.isCompleted}
      shouldFitContainer
      iconAfter={
        !todo.isCompleted && (
          <span className="check-icon" onClick={() => onCheckBtnClick(todo.id)}>
            <CheckIcon primaryColor="#4fff4f" />
          </span>
        )
      }
    >
      {todo.name}
      <span className="delete-icon" onClick={() => onDeleteBtnClick(todo.id)}>
        <EditorRemoveIcon />
      </span>
      <span className="edit-icon" onClick={() => onEditBtnClick(todo.id)}>
        <EditIcon />
      </span>
    </ButtonStyled>
  );
}
