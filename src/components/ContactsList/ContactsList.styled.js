import styled from '@emotion/styled/macro';

export const Contacts = styled.ul`
  margin-top: 15px;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--main-color);
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    background-color: var(--bg-hover-color);
  }
`;

export const ContactsDetails = styled.p`
  & > span {
    margin-left: 10px;
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 150px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-color);
  text-transform: uppercase;
  background-color: lightslategray;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 4px 3px 12px -1px var(--accent-color);
  }
`;
