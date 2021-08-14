import React from 'react';
import '../sytyles/Pagination.css';

function Pagination({characterPerPage,totalChracters,paginate}) {
    const pageNumbers = [];
    for(let i = 1; i<=Math.ceil(totalChracters / characterPerPage);i++){
        pageNumbers.push(i);
    }
    return (
         <div className='pagination'>
            {pageNumbers.map(number => (
                <div key={number} className='page_item'onClick={(e) => {
                    e.preventDefault();
                    paginate(number)}}>
                    <a href="!#" className='page_link'>{number}</a>
                </div>
            ))}
            </div>
    )
}

export default Pagination
