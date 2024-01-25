import React from 'react';
import styled from 'styled-components';

const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: ${(props) => (props.active ? '16px' : '14px')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationBlock>
      {pageNumbers.map((number) => (
        <PaginationButton
          key={number}
          onClick={() => paginate(number)}
          active={number === currentPage}
        >
          {number}
        </PaginationButton>
      ))}
    </PaginationBlock>
  );
};

export default Pagination;
