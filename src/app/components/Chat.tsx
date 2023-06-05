"use client"
import React, { useState } from 'react';

type Props = {};

const Chat = (props: Props) => {
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mesajı gönderme işlemini burada gerçekleştirin
    console.log('Gönderilen Mesaj:', message);
    setMessage('');
  };

  return (
    <div className="flex  w-4/5 bg-gray-100">
      <div className=" p-6 w-full flex flex-col justify-between">
        <div className="mb-4">
          {/* Mesajları göstermek için bir bölüm */}
          <div className="bg-white p-4 rounded-md shadow-md">Messages will be shown here</div>
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Type your message"
            className="w-full py-2 px-4 rounded-md shadow-md"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 w-2/12 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md"
          >
            Sent
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
