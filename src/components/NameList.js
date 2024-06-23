import React from 'react'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map(name => <h2>{name}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]

    
    const personList = persons.map(person => 
        <h2>
            I am {person.name}. I am {person.age} years old. I know {person.skill}
        </h2>
    )

  return <div> { personList} </div>
}

export default NameList
