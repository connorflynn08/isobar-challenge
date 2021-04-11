import React from 'react';
import reactCourse from './reactCourse.json';
import vueCourse from './vueCourse.json';
import cssCourse from './cssCourse.json';
import jsCourse from './jsCourse.json';
import Select from 'react-select';
import { useState } from 'react';
import Login from './Login';




const options = [
    { value: 'react', label: 'React - Basics' },
    { value: 'vue', label: 'Vue - learn vue in an hour' },
    { value: 'css', label: 'CSS Animations' },
    { value: 'js', label: 'JS - Zero to hero' }
]

const Courses = () => {

    const [ course, setCourse ] = useState(options[0]);

    return (
        <div className="container">
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
                        <p>Author: {reactCourse.reactAuthor}</p>
                        <p>Publish date: {reactCourse.reactPublishDate}</p>
                        <p>Course duration: {reactCourse.reactDuration}</p>
                        <img id="courseimg" src="https://cdn.auth0.com/blog/react-js/react.png"></img>
                        <Login />
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
                        <p>Author: {vueCourse.author}</p>
                        <p>Publish date: {vueCourse.publishDate}</p>
                        <p>Course duration: {vueCourse.duration}</p>
                        <img id="courseimg" src="https://vuejs.org/images/logo.png"></img>
                        <button type="button" class="btn btn-primary">Add this course</button>
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
                        <p>Author: {cssCourse.author}</p>
                        <p>Publish Date: {cssCourse.publishDate}</p>
                        <p>Course duration: {cssCourse.duration}</p>
                        <img id="courseimg" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"></img>
                        <button type="button" class="btn btn-primary">Add this course</button>
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
                        <p>Author: {jsCourse.author}</p>
                        <p>Publish date: {jsCourse.publishDate}</p>
                        <p>Course duration: {jsCourse.duration}</p>
                        <img id="courseimg" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"></img>
                        <button type="button" class="btn btn-primary">Add this course</button>
                    </div>
                )
                }
            ) : null
            }
            

        </div>
    )
}

export default Courses
