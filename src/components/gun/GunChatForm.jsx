function GunChatForm() {
    return (
        <div id="chat-form" style="display: none;">
            <h1>Gun Chat</h1>
            <div id="chat"></div>
            <form>
                <input type="text" id="chat-input" placeholder="Type your message..." />
                <input type="file" id="image-input" multiple />
                <input class=" button is-success" type="button" id="send-button" value="Send" />
            </form>
            <button class=" button" id="logout-button">Log Out</button>
            <button onclick="deleteAllMessages()">Delete all messages</button>
        </div>
    )
}

export default GunChatForm