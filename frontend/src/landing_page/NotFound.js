import React from 'react';

function NotFound() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className=' fs-2 mt-5'>404 Not Found</h1>
                <p className='text-muted'>Sorry, We couldn’t find the page you were looking for.</p>
            </div>
        </div>
    );
}

export default NotFound;