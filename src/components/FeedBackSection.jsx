import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown() {
    if (event.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value} </h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default function FeedBackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(true);
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  //   function toggleError() {
  //     setHasError((prev) => !prev)
  //   }

  return (
    <section>
      <h3>Обратная связь</h3>

      {/* <Button onClick={toggleError}>Toggle Error</Button> */}

      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          className="control"
          id="name"
          value={name}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          name=""
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложения</option>
        </select>

        {/* <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre> */}

        <Button disabled={hasError} isActive={!hasError}>
          Отправить
        </Button>
      </form>
      <StateVsRef />
    </section>
  );
}
