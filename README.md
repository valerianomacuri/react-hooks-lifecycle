# react-hooks-lifecycle

### Usage

```javascript
import { useState } from "react";
import {
  useMounted,
  useBeforeUpdate,
  useUpdated,
  useBeforeUnmount,
} from "react-hooks-lifecycle";

export const Component = () => {
  const [value, setValue] = useState(0);

  useMounted(() => {
    console.log("mounted");
  });

  useBeforeUpdate(() => {
    console.log("beforeUpdate");
  }, [value]);

  useUpdated(() => {
    console.log("updated");
  }, [value]);

  useBeforeUnmount(() => {
    console.log("beforeUnmount");
  });

  const handleClick = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>I'm a button {value}</button>
    </div>
  );
};
```
