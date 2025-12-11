import React, {useCallback, useMemo, useState} from 'react';
import {Button} from "antd";
import {Input} from "antd";

function FilteredList() {
    const [students, setStudents] = useState(
        [
            { id:1 , name : "John"},
            { id:2 , name : "Jake"},
            { id:3 , name : "Daniela"},
            { id:4 , name : "Lara"},
            { id:5 , name : "Karl"},
            { id:6 , name : "Violetta"}
        ]
    )
    const [filter, setFilter] = useState("");
    const filteredStudents = useMemo(()=>{
        return students.filter(student => student.name.toLowerCase().includes(filter.toLowerCase()));
    }, [students,filter]);
    const addStudent = useCallback(() => {
        setStudents([...students,
            {
                id:students.length+1,
                name:`student${students.length-1}`,
            }]
        );
        console.log('Student added');
    },[])
    console.log(students);
    return (
        <div>
            <Input onChange={e => setFilter(e.target.value)} />
            <ul>
                {filteredStudents.map(student => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
            <Button onClick={addStudent}>Добавить пользователя</Button>
        </div>
    );
}

export default FilteredList;