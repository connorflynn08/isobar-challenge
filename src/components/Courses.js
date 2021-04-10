import React from 'react';
import reactCourse from './reactCourse.json';
import vueCourse from './vueCourse.json';
import cssCourse from './cssCourse.json';
import jsCourse from './jsCourse.json';
import Select from 'react-select';
import { useState } from 'react';




const options = [
    { value: 'react', label: 'React - Basics' },
    { value: 'vue', label: 'Vue - learn vue in an hour' },
    { value: 'css', label: 'CSS Animations' },
    { value: 'js', label: 'JS - Zero to hero' }
]

const Courses = () => {

    const [ course, setCourse ] = useState(options[0]);

    return (
        <div>
            <div className="container">
                <Select
                    className="basic-single"
                    isSearchable
                    options={options}
                    value={course}
				    onChange={setCourse}
                />
            </div>
            {course.value === 'react' ? reactCourse.map((reactCourse) => {
                return (
                    <div className="courseContainer">
                        <h1>{reactCourse.reactName}</h1>
                        <p>{reactCourse.reactDescription}</p>
                        <p>{reactCourse.reactAuthor}</p>
                        <p>{reactCourse.reactPublishDate}</p>
                        <p>{reactCourse.reactDuration}</p>
                        <img id="courseimg" src="https://cdn.auth0.com/blog/react-js/react.png"></img>
                    </div>
                )
                }
            ) : null
            }

            {course.value === 'vue' ? vueCourse.map((vueCourse) => {
                return (
                    <div className="courseContainer">
                        <h1>{vueCourse.name}</h1>
                        <p>{vueCourse.description}</p>
                        <p>{vueCourse.author}</p>
                        <p>{vueCourse.publishDate}</p>
                        <p>{vueCourse.duration}</p>
                        <img id="courseimg" src="https://vuejs.org/images/logo.png"></img>
                    </div>
                )
                }
            ) : null
            }

            {course.value === 'css' ? cssCourse.map((cssCourse) => {
                return (
                    <div className="courseContainer">
                        <h1>{cssCourse.name}</h1>
                        <p>{cssCourse.description}</p>
                        <p>{cssCourse.author}</p>
                        <p>{cssCourse.publishDate}</p>
                        <p>{cssCourse.duration}</p>
                        <img id="courseimg" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"></img>
                    </div>
                )
                }
            ) : null
            }

            {course.value === 'js' ? jsCourse.map((jsCourse) => {
                return (
                    <div className="courseContainer">
                        <h1>{jsCourse.name}</h1>
                        <p>{jsCourse.description}</p>
                        <p>{jsCourse.author}</p>
                        <p>{jsCourse.publishDate}</p>
                        <p>{jsCourse.duration}</p>
                        <img id="courseimg" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"></img>
                    </div>
                )
                }
            ) : null
            }
            

        </div>
    )
}

export default Courses
