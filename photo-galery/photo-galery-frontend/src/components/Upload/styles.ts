import styled, { css } from 'styled-components';

interface IProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const Container = styled.div<IProps>`
  width: 400px;
  height: 400px;
  border: 2px dashed blue;
  border-radius: 0.25rem;

  ${(props) => props.isDragActive && dragActive}
  ${(props) => props.isDragReject && dragReject}
`;
