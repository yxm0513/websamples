# 01 Use State

In this example we will setup react-hooks-testing-library and create a simple test over a custom hook.

We will start from `00-boilerplate`.

# Steps

- `npm install` to install previous sample packages:

```bash
npm install
```

- Let's install [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library) and [react-test-renderer](https://www.npmjs.com/package/react-test-renderer) as dependency.

```bash
npm install @testing-library/react-hooks react-test-renderer -D
```

- When to use this library? We are writing custom hooks outside components. So let's create a simple custom hook:

### ./src/model.ts

```javascript
export interface Credential {
  name: string;
  password: string;
}

```

### ./src/login.hooks.ts

```javascript
import React from 'react';
import { Credential } from './model';

export const useLogin = () => {
  const [credential, setCredential] = React.useState<Credential>({
    name: '',
    password: '',
  });

  return {
    credential,
    setCredential,
  };
};

```

- It's simple hook, isn't it? Let's create the spec:

### ./src/login.hooks.spec.ts

```javascript
import { renderHook } from '@testing-library/react-hooks';
import { Credential } from 'model';
import { useLogin } from './login.hooks';

describe('useLogin specs', () => {
  it('', () => {
    // Arrange
    // Act
    // Assert
  });
});

```

- should return an object: credential with default values and setCredential a function when it calls it:

### ./src/login.hooks.spec.ts

```diff
...

- it('', () => {
+ it('should return an object: credential with default values and setCredential a function when it calls it', () => {
    // Arrange

    // Act
+   const { result } = renderHook(() => useLogin());

    // Assert
+   const defaultCredential: Credential = { name: '', password: '' };
+   expect(result.current.credential).toEqual(defaultCredential);
+   expect(result.current.setCredential).toEqual(expect.any(Function));
  });
});

```

- should update credential when it calls setUser:

### ./src/login.hooks.spec.ts

```diff
...
+ it('should update credential when it calls setCredential', () => {
+   // Arrange
+   const newCredential: Credential = { name: 'admin', password: 'test' };

+   // Act
+   const { result } = renderHook(() => useLogin());

+   result.current.setCredential(newCredential);

+   // Assert
+   expect(result.current.credential).toEqual(newCredential);
+ });

```

- The test passes but we see a warning about to use `act` method.

> [Read more](https://reactjs.org/docs/test-utils.html#act)

### ./src/login.hooks.spec.ts

```diff
- import { renderHook } from '@testing-library/react-hooks';
+ import { renderHook, act } from '@testing-library/react-hooks';
import { Credential } from 'model';
import { useLogin } from './login.hooks';

...

  it('should update credential when it calls setCredential', () => {
    // Arrange
    const newCredential: Credential = { name: 'admin', password: 'test' };

    // Act
    const { result } = renderHook(() => useLogin());

+   act(() => {
      result.current.setCredential(newCredential);
+   });

    // Assert
    expect(result.current.credential).toEqual(newCredential);
  });

```

More info about this: https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
