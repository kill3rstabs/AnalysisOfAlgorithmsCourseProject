import React from 'react'
import './ComplexityAnalyzer.css'

const ComplexityAnalyzer = ({complexity }) => {
    // complexity = 99;
    // const time = Math.random();

    let string_ = "Time taken for sorting is "+ complexity
    return (
        <div class="complexiy_ legends_">
            <span class="text">{string_}
            </span>
        </div>

    );
}

export default ComplexityAnalyzer