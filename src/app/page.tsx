import React from 'react';
import MessageBoard from '../app/message/page';

export default function Home() {
  const userType = 'professor';  // ou 'student'

  return (
    <div>
      <MessageBoard userType={userType} />
    </div>
  );
}
