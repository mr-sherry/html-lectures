import React, { useEffect, useId, useRef, useState } from 'react';

function Ref() {
  const inputRef = useRef();
  const headingRef = useRef();
  const formId = useId();
  const secondFormId = useId();
  const [name, setName] = useState('sssss');

  function save() {
    inputRef.current.focus();
    headingRef.current.textContent = name;
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      {/* <input type="text" name="name" id="nameInp" />
          <label htmlFor="nameInp">name</label>

          <input type="text" name="username" id="" />
          <label htmlFor="">username</label>

          [input:value, inputId:nameInp , inputNmae:name,label:nameInp] */}

      <form action='' id={formId}></form>
      <form action='' id={secondFormId}>
        {/* main form */}
        <input type='text' form={secondFormId} />
        {/* variant form data */}
        <input type='text' form={formId} />
      </form>

      <input
        ref={inputRef}
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={save}>Save</button>
      <h1 ref={headingRef}>value here</h1>
    </div>
  );
}

export default Ref;
