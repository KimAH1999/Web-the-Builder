import React from 'react';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

<<<<<<< HEAD
export default DeleteBtn;
=======
export default DeleteBtn;
>>>>>>> f239d2469acf2e3e40d3e5d683b889a3ae6413bb
