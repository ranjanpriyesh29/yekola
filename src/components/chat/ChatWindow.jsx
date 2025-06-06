import { useState } from "react";

const mockContacts = [
  { id: 1, name: "John Doe", onlineUntil: "03:00 am", group: "Friends" },
  { id: 2, name: "Support Bot", onlineUntil: "24/7", group: "Support" },
];

const ChatWindow = ({ onClose }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [groupFilter, setGroupFilter] = useState("");
  const filteredContacts = mockContacts.filter(
    (user) => !groupFilter || user.group === groupFilter
  );
  return (
    <div className="bg-white shadow-2xl rounded-lg w-80 h-[500px] flex flex-col">
      <div className="flex items-center justify-between p-3 border-b">
        {selectedUser ? (
          <>
            <button onClick={() => setSelectedUser(null)}>🔙</button>
            <div>
              <p className="font-semibold">{selectedUser.name}</p>
              <p className="text-xs text-gray-500">
                Online until {selectedUser.onlineUntil}
              </p>
            </div>
            <button onClick={onClose}>❌</button>
          </>
        ) : (
          <>
            <p className="font-bold">Chats</p>
            <button onClick={onClose}>❌</button>
          </>
        )}
      </div>

      {!selectedUser ? (
        <div className="flex-1 overflow-y-auto p-2">
          <div className="mb-2">
            <label className="block text-sm font-medium">
              Filter by Group:
            </label>
            <select
              className="w-full border rounded p-1"
              onChange={(e) => setGroupFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="Friends">Friends</option>
              <option value="Support">Support</option>
            </select>
          </div>

          {filteredContacts.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className="p-2 border rounded hover:bg-gray-100 cursor-pointer mb-2"
            >
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-gray-500">
                Online until {user.onlineUntil}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 p-2 flex flex-col justify-between">
          <div className="overflow-y-auto flex-1">
            {/* Chat messages go here */}
            <div className="text-sm bg-green-200 p-2 rounded my-1 self-start">
              Hi, I am checking your course right now. Please wait for few
              minutes.
            </div>
            <div className="text-sm bg-gray-200 p-2 rounded my-1 self-end">
              Thank you very much. Don't worry. Take your time.
            </div>
          </div>
          <div className="border-t p-2 flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded px-2"
              placeholder="Type a message"
            />
            <button className="bg-green-500 text-white px-3 rounded">➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
