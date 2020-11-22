import React from "react";

const Rainbow = (WrappedCompoent) => {
  const colours = ['red', 'pink', 'green', 'blue', 'orange', 'yellow'];
  const randomColor = colours[Math.floor(Math.random() * 5)];
  const className = randomColor + '-text';
  console.log(className)
  return (props) => {
    return (
      <div className={className}>
        <WrappedCompoent {...props} />
      </div>
    )
  }
}
export default Rainbow;