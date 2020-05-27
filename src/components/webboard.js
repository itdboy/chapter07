import React from 'react';

function webboard({ match }) {
    return (
        <div>
            <h1>หน้า webboard</h1>
            <p>
                กระทู้ปัจจุบัน : {match.params.kid}
            </p>
        </div>
    )
}

export default webboard;