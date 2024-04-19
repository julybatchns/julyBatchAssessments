import React from "react";

function Users({ isLoading, items }) {
  if (isLoading) {
    return <div>Data is Loading...</div>;
  } else {
    return items.map((item) => {
      return <div className="user">{item}</div>;
    });
  }
}

export default Users;
