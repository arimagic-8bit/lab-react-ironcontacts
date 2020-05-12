import React, { Component } from 'react'
import data from './../contacts.json'
import Contact from './Contact'



 class TableOfContacts extends Component {
    state = {
        contacts: data.slice(0,5),
    }

    giveRandom = () => {
        const contact = data[Math.floor(Math.random()*data.length)] 
        let newContactList = [...this.state.contacts]
        newContactList.push(contact)
        this.setState({contacts:newContactList})
    }

    sortAlph = () => {
       let listOrd = this.state.contacts.sort(function(a,b) {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        this.setState({contacts:listOrd})
    }

    sortPop = () => {
       let listPop = this.state.contacts.sort(function(a,b) {
           return  b.popularity - a.popularity
       }) 
       this.setState({contacts:listPop})
    }

    deleteCont = (id) => {
        const updateList = this.state.contacts.filter((contact) => {
            if (contact.id !== id) return contact; 
        });
        this.setState({contacts:updateList})
    }

    
    render() {
        return (
            <div>
                <button onClick = {() => {this.giveRandom()}}>Add Random Contact</button> 
                <button onClick = {() => {this.sortAlph()}}>Sort by name</button>
                <button onClick = {() => {this.sortPop()}}>Sort by popularity</button>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    { 
                      this.state.contacts.map((contactObj) => {
                            return (
                            <Contact 
                            key={contactObj.id} 
                            {...contactObj} 
                            remove={this.deleteCont}
                            />)
                        })
                    }
                    

                </table>
            </div>
        )
    }
}

export default TableOfContacts
