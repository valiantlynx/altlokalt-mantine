// make a chat dapp using gunjs. with user authentication. and a chat form. and a chat log. and a delete all messages button. and a log out button. and a delete all messages button
import { useState, useEffect, useReducer } from 'react'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import Gun from 'gun'

const gun = Gun({
    peers: ['https://chat.valiantlynx.com/gun']
});

// an initial state for the messages
const initialState = {
    messages: []
}

// a reducer for the messages
function reducer(state, action) {
    switch (action.type) {
        case 'addMessage':
            return {
                messages: [...state.messages, action.payload]
            }
        case 'deleteAllMessages':
            return {
                messages: []
            }
        default:
            return state
    }
}

function GunChat() {
    // a form state holding the name of the user and the message, the id of the message, and the date the message was created, and if the message has an image
    const [formState, setFormState] = useState({
        name: '',
        message: '',
        id: '',
        createdAt: '',
        image: ''
    })

    // use the reducer to manage the messages
    const [state, dispatch] = useReducer(reducer, initialState)

    // a useEffect to listen for new messages
    useEffect(() => {
        // listen for new messages
        const messages = gun.get('messages')
        console.log('messages: ', messages)
        messages.map().on(m => {

            // if there is a message, add it to the state using the reducer dispatch otherwise do nothing
            if (m && m.name && m.message && m.createdAt) {
                console.log('m: ', m)
                // add the new message to the state
                dispatch({
                    type: 'addMessage',
                    payload: m
                })
            } else {
                // do nothing
            }

        })
    }, [])

    // update the form field as the user types
    function onChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    // a way to save the message to the gun db
    const saveMessage = (e) => {
        e.preventDefault()
        // get the messages from the gun db
        const messages = gun.get('messages')
        // add the new message to the gun db
        messages.set({
            name: formState.name,
            message: formState.message,
            createdAt: new Date().toISOString()
        })
        // clear the form
        setFormState({
            name: '',
            message: ''
        })
    }

    // a way to delete all messages from the gun db
    const deleteAllMessages = () => {
        // get the messages from the gun db
        const messages = gun.get('messages')
        // map through all messages and delete all messages from the gun db
        messages.map().once((m, id) => {
            messages.get(id).put(null)
        })

        // clear the state
        dispatch({
            type: 'deleteAllMessages'
        })

        // clear the form
        setFormState({
            name: '',
            message: ''
        })

        // clear the local storage
        localStorage.clear()



    }


    // function to render the state, check if the mesaage is exatly the same as the one already rendred and if not, render it
    function renderState() {
        // check if the state is not empty

    }



    // Check for cached user
    const cachedUser = localStorage.getItem('currentUser');
    const cachedPassword = localStorage.getItem('currentPassword');
    if (cachedUser && cachedPassword) {
        // loginUser(cachedUser, cachedPassword);
    }

    // create a ui for the chat
    return (
        <div>
            <Nav />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Gun Chat</h1>
                        <form onSubmit={saveMessage}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={onChange}
                                />
                            </div>
                        </form>
                        <button className="button is-success" onClick={saveMessage}>Send</button>
                        <button className="button is-danger" onClick={deleteAllMessages}>Delete All Messages</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Messages</h2>
                        <ul>
    
                            { 
                                // map through the state
                                state.messages.map((m, i) => {
                                    console.log('m: ', m)
                                    console.log('state.messages[i - 1]: ', state.messages[i - 1])
                                    console.log("i: ", i)
                                    // check if the mesaage is exatly the same as the one already rendred starting with the second message
                                    if (i > 0 && m.name === state.messages[i - 1].name && m.message === state.messages[i - 1].message && m.createdAt === state.messages[i - 1].createdAt) {
                                        // do nothing
                                    } else {
                                        // render the message
                                        return (
                                            <li className="card" key={i}>
                                                <div className="card-content">
                                                    <div className="content">
                                                        <h3>{m.name}</h3>
                                                        <p>{m.message}</p>
                                                        <p>{m.createdAt}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                })
                          }


                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default GunChat