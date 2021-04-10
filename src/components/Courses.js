import React from 'react';
import courses from './courses.json';
import Select from 'react-select'


const options = [
    { value: 'react', label: 'React - Basics' },
    { value: 'vue', label: 'Vue - learn vue in an hour' },
    { value: 'css', label: 'CSS Animations' },
    { value: 'js', label: 'JS - Zero to hero' }
]

const Courses = () => {
    return (
        <div>
            <div className="container">
                <Select
                    className="basic-single"
                    isSearchable
                    options={options}
                />
            </div>
        </div>
    )
}

export default Courses
