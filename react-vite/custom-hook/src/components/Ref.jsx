import React, { useEffect, useId, useRef, useState } from 'react';
import { motion } from 'motion/react';

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

      <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
        <motion.h1
          whileHover={{ scale: 1.1 }}
          whileTap={{ color: 'red' }}
          onHoverStart={() => console.log('hover started!')}
          ref={headingRef}
        >
          whilte tap hover 
          initial animate
          
          value here
        </motion.h1>
      </div>
    </div>
  );
}

export default Ref;
