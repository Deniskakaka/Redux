import React from 'react';

const Pagination = (props) => {
    const {currentPage, itemsPerPage,goPrev,goNext,totalItems} = props
    const min = currentPage === 0;
    const max =  currentPage + 1 > Math.ceil(totalItems / itemsPerPage) - 1
    
    return(
            <div className="pagination">
                <button 
                    className="btn" onClick={goPrev} 
                    disabled={min}>
                    {min ? "": '←'}
                </button>
                <span className="pagination__page">{currentPage + 1}</span>
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