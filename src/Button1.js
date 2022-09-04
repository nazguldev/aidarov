import React from 'react';
function Button1({setShow}) {
    return (
        <div>
            <div className='div_a' onClick={() => setShow(true)}>
                <p > Записаться на консультацию </p>
            </div>
        </div>
    );
}

export default Button1;