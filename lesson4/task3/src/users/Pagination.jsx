import React from 'react';

const Pagination = (props) => {
    const {currentPage, itemsPerPage,goPrev,goNext,totalItems} = props
       const max =  currentPage + 1 > Math.ceil(totalItems / itemsPerPage) - 1
    
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
                    disabled={max}
                    >
                    {max? "": '→'} 
                </button>
            </div>
    );
};

export default Pagination;