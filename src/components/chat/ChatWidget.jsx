import ProfilePic from "../../assets/profile-pic2.jpg";
import ChatWindow from "./ChatWindow";

const ChatWidget = ({ isChatOpen, setIsChatOpen }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 overflow-hidden">
      {isChatOpen ? (
        <ChatWindow onClose={() => setIsChatOpen(false)} />
      ) : (
        <button onClick={() => setIsChatOpen(true)}>
          <img
            src={ProfilePic}
            alt="Chat"
            className="rounded-full size-16 mb-2 object-cover border-gray-400 border-4 p-1"
          />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
