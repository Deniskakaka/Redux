import React from 'react';

const Pagination = (props) => {
    const {currentPage, itemsPerPage,goPrev,goNext,totalItems} = props
    let max = itemsPerPage === 1 ? 10 : Math.floor(totalItems / itemsPerPage);
    console.log(max)
    return(
            <div className="pagination">
                <button 
                    className="btn" onClick={goPrev} 
                    disabled={currentPage === 0 ? true: false}>
                    {currentPage === 0 ? "": '←'}
                </button>
                <span className="pagination__page">{currentPage}</span>
                <button 
                    className="btn" onClick={goNext} 
                    disabled={currentPage === max
                        ? true: false}
                    >
                    {currentPage === max? "": '→'} 
                </button>
            </div>
    );
};

export default Pagination;