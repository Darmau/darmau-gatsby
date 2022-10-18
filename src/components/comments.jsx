import React, { useEffect } from 'react';

const Comments = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.commento.io/js/commento.js';
        script.async = true;

        const comments = document.getElementById('comments-container');
        if (comments) comments.appendChild(script);
    }, []);

    return (
        <>
            <div id="comments-container"></div>
            <div id="commento"></div>
        </>
    );
};

export default Comments;