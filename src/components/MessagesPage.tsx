import React, { useState } from 'react';
import { Search, Send, Phone, Video, MoreVertical, Clock, CheckCheck } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isParent: boolean;
  read: boolean;
  avatar: string;
}

interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  online: boolean;
}

const MessagesPage: React.FC = () => {
  const [activeContact, setActiveContact] = useState<number>(1);
  const [newMessage, setNewMessage] = useState('');

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Mrs. Sarah Wilson",
      role: "Math Teacher",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
      lastMessage: "We can discuss Emma's progress in our next meeting.",
      lastMessageTime: "10:30 AM",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Mr. James Parker",
      role: "Science Teacher",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
      lastMessage: "The science fair project looks promising!",
      lastMessageTime: "Yesterday",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Ms. Rebecca Chen",
      role: "English Teacher",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
      lastMessage: "Lucas has shown great improvement in writing.",
      lastMessageTime: "2 days ago",
      unread: 0,
      online: true
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: "Mrs. Sarah Wilson",
      content: "Hello! I wanted to discuss Emma's recent progress in mathematics.",
      timestamp: "10:00 AM",
      isParent: false,
      read: true,
      avatar: contacts[0].avatar
    },
    {
      id: 2,
      sender: "You",
      content: "Hi Mrs. Wilson! Yes, I'd love to hear about her progress.",
      timestamp: "10:15 AM",
      isParent: true,
      read: true,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      sender: "Mrs. Sarah Wilson",
      content: "Emma has shown exceptional understanding of algebraic concepts. She's been helping other students during group work.",
      timestamp: "10:20 AM",
      isParent: false,
      read: true,
      avatar: contacts[0].avatar
    },
    {
      id: 4,
      sender: "Mrs. Sarah Wilson",
      content: "We can discuss more details during our parent-teacher conference next week.",
      timestamp: "10:30 AM",
      isParent: false,
      read: false,
      avatar: contacts[0].avatar
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, you would send this to an API
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const activeContactData = contacts.find(contact => contact.id === activeContact);

  return (
    <div className="flex h-[calc(100vh-2rem)] bg-gray-50 rounded-xl overflow-hidden">
      {/* Contacts Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8d000]"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setActiveContact(contact.id)}
              className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors ${
                activeContact === contact.id ? 'bg-[#f8d000] bg-opacity-10' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-black">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                </div>
                <p className="text-sm text-gray-600">{contact.role}</p>
                <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
              </div>
              {contact.unread > 0 && (
                <span className="bg-[#f8d000] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {contact.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        {activeContactData && (
          <div className="p-4 bg-white border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={activeContactData.avatar}
                alt={activeContactData.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-black">{activeContactData.name}</h2>
                <p className="text-sm text-gray-600">{activeContactData.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Video className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.isParent ? 'flex-row-reverse' : ''
              }`}
            >
              <img
                src={message.avatar}
                alt={message.sender}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div
                className={`max-w-[70%] ${
                  message.isParent
                    ? 'bg-[#f8d000] text-black'
                    : 'bg-gray-100 text-black'
                } rounded-2xl p-3`}
              >
                <p>{message.content}</p>
                <div className={`flex items-center gap-1 mt-1 text-xs ${
                  message.isParent ? 'text-black text-opacity-60' : 'text-gray-500'
                }`}>
                  <Clock className="w-3 h-3" />
                  {message.timestamp}
                  {message.isParent && (
                    <CheckCheck className={`w-3 h-3 ${message.read ? 'text-blue-500' : ''}`} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8d000]"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-black text-[#f8d000] rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;