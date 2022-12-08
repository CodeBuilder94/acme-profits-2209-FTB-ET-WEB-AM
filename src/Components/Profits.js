import React from 'react';

const Profits = ({profits}) => {
    return(
        <div>
            {
                profits.map(profi =>{
                    return(
                        <div>
                            {
                                profits.amount
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Profits;