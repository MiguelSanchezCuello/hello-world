import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana','Bruce']
    const nameList = names.map((name, index) => <h2 key={index}>{name} and index: {index}</h2>)
    // When rendering lists only use index as a key under the followign conditions:
    // 1. The list and items are static and will not change.
    // 2. The items in the list do not have a unique id.
    // 3. The list will not be reordered or filtered.
    // This is because there are some issues with the UI when rendering and even though the items 
    // in the list might seem organized and changed the values willl not. check video 19 for details.

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

    
    const personList = persons.map(person => <Person key={person.id} person={person} />)

//   return <div> { personList} </div>
return <div>{nameList}</div>
}

export default NameList
