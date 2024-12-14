import React from 'react'

const ifstatement = () => {
    var x = 10;
    if (x == 10) {
        return <h3>Compare</h3>
    } else {
        return <h3>Not Compare</h3>
    }
}

const ConditionEx = () => {
    return (
        <>
            <div>
                {
                    ifstatement()
                }
            </div>
        </>
    )
}

export default ConditionEx
