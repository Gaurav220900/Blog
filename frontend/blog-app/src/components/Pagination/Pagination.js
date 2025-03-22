import React from 'react';
import styles from './pagination.module.css';
const Pagination = () => {
    const handlePrevious = () => {
      
    };

    const handleNext = () => {
       
    };

    return (
            <div style={{textAlign: 'center', padding: '6', margin: '10px auto', position: 'relative', right: '-11px'}}>
             <button className={styles.button}>{'<'} Prev</button>
             <button className={styles.button}>Next {'>'}</button>
            </div>
        
    );
};

export default Pagination;