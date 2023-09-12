import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import THEME from "../../../../theme"

export const Paginate = styled(ReactPaginate).attrs({
  // You can redefine classes here, if you want.
  activeClassName: 'active', // default to "selected"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  padding: 0 5rem;
  font-size: 18px;
  font-weight: bolder;

  li a {
    border-radius: 1px;
    padding: 0.5rem 1rem;
    background-color: ${THEME.COLORS.BLACK};
    color: ${THEME.COLORS.WHITE};
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    border-color: transparent;
    color: ${THEME.COLORS.WHITE};
    min-width: 32px;
  }
  li.disabled a {
    color: ${THEME.COLORS.WHITE};
  }
  li.disable,
  li.disabled a {
    cursor: default;
    background-color: ${THEME.COLORS.GREY};
  }

  a:hover {
    color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    transition: 0.9s;
}
`;