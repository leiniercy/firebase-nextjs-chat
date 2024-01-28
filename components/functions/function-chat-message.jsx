"use client"
const ChatMessage = ({auth, message}) => {
    const { text, uid, photoURL } = message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || '/assets/icons/avatar.svg'} />
        <p>{text}</p>
      </div>
    </>)
}

export default ChatMessage;