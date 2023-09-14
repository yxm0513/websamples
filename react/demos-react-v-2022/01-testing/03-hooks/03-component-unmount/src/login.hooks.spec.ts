import { renderHook, act } from '@testing-library/react-hooks';
import * as api from './api';
import { Credential, User } from 'model';
import { useLogin } from './login.hooks';

describe('useLogin specs', () => {
  it('should return an object: credential with default values and setCredential a function when it calls it', () => {
    // Arrange
    const { result } = renderHook(() => useLogin());

    // Act
    // Assert
    const defaultCredential: Credential = { name: '', password: '' };
    expect(result.current.credential).toEqual(defaultCredential);
    expect(result.current.setCredential).toEqual(expect.any(Function));
  });

  it('should update credential when it calls setCredential', () => {
    // Arrange
    const newCredential: Credential = { name: 'admin', password: 'test' };

    // Act
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.setCredential(newCredential);
    });

    // Assert
    expect(result.current.credential).toEqual(newCredential);
  });

  it('should return user equals null and onLogin function', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useLogin());

    // Assert
    expect(result.current.user).toBeNull();
    expect(result.current.setCredential).toEqual(expect.any(Function));
  });

  it('should update user when it send valid credentials using onLogin', async () => {
    // Arrange
    const adminUser: User = { email: 'admin@email.com', role: 'admin' };
    const loginStub = jest.spyOn(api, 'login').mockResolvedValue(adminUser);

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useLogin());

    act(() => {
      result.current.onLogin();
    });

    await waitForNextUpdate();

    // Assert
    expect(loginStub).toHaveBeenCalled();
    expect(result.current.user).toEqual(adminUser);
  });
});
