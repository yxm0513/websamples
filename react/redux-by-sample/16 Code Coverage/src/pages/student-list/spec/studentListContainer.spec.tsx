import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { StudentListContainer } from '../studentListContainer';
import { StudentEntity } from '../../../model/student'
import * as getStudentModule from '../actions/studentListRequestStarted'
import * as navigateToEditStudentModule from '../actions/navigateToEditStudent'

const createStore = configureStore();

describe('StudentListContainer', () => {
  it('Should render StudentListComponent (one student)', sinon.test(() => {
    // Arrange
    let sinon: sinon.SinonStatic = this;

    const student = new StudentEntity();
    student.id = 2;
    student.fullname = 'John Doe';
    student.email = 'john@mail.com';


    let mockStore = createStore({
        studentReducer: {
                          studentsList: [student]
                        }
    });


    let studentListRequestStartedActionMock = sinon.stub(getStudentModule,
                                           'studentListRequestStartedAction',
                                           () => {
                                             return {
                                               type: 'dummy'
                                             }
                                           }
                                           );


      let navigateToEditStudentActionMock = sinon.stub(navigateToEditStudentModule,
                                             'navigateToEditStudentAction',
                                             (id) => {
                                               return {
                                                 type: 'dummy'
                                               }
                                             }
                                             );


     // Act
     const nonTypedMockStore : any = mockStore;
     let StudentListContainerWrapper = mount(
       <Provider store={nonTypedMockStore}>
           <StudentListContainer />
       </Provider>
     );

     // Assert
     var studentListPresentationalWrapper = StudentListContainerWrapper.find('StudentListComponent');
     expect(studentListPresentationalWrapper).not.to.be.undefined;
     expect(studentListPresentationalWrapper.prop('studentList')).not.to.be.undefined;
     expect(studentListPresentationalWrapper.prop('studentList').length).equals(1);
     expect(studentListPresentationalWrapper.prop('studentList')[0].fullname).equals(student.fullname );
     expect(studentListPresentationalWrapper.prop('studentList')[0].email).equals(student.email);


  }).bind(this));
});
