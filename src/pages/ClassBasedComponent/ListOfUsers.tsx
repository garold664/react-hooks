import React, { memo } from 'react';

function ListOfUsers({ users }: { users: string[] }) {
  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default memo(ListOfUsers);
