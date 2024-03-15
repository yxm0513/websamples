import * as deepFreeze from 'deep-freeze';
import {actionsEnums} from '../common/actionsEnums'
import {sessionReducer} from './session'
import { UserProfile } from '../model/userProfile'
import { LoginEntity } from '../model/login'

describe('sessionReducer', () => {
  describe('#handlePerformLogin', () => {
    it('Store successful login information in the store', () => {
      // Arrange
      const initialState = {  isUserLoggedIn : false,
                              userProfile : new UserProfile(),
                              editingLogin : new LoginEntity()
                            };


      deepFreeze(initialState);

      const userFullname = 'John Doe';
      const role = 'admin';

      const action = {
        type: actionsEnums.USERPROFILE_PERFORM_LOGIN,
        payload: {
          succeeded : true,
          userProfile : {
            fullname : userFullname,
            role : role
          }
        }
      };

      // Act
      const finalState = sessionReducer(initialState, action);

      // Assert
      expect(finalState).not.to.be.undefined;
      expect(finalState.isUserLoggedIn).to.be.true;
      expect(finalState.userProfile.fullname).to.be.equal(userFullname)
      expect(finalState.userProfile.role).to.be.equal(role)
    });
  });
});
