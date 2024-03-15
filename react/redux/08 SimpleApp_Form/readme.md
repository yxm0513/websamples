# 08 SimpleApp_Form

This sample series takes as starting point _07 SimpleApp_List_

In this sample we are going to implement the single student edition.

Summary steps:

- Let's add a param based navigation from student-list to student-detail.
- Let's load the requested student.
- Let's provide support for the changes to be saved.
- Let's incorporate validation.

# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (>=v6.6.0 or newer) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content from _07 SimpleApp_List_ and execute:

  ```
  npm install
  ```

- Let's add a new action that will fire navigation (we will trigger this
  when clicking on the pencil icon on one of the students row).

_./src/pages/student-list/actions/navigateToEditStudent.ts_

```javascript
import { actionsEnums } from "../../../common/actionsEnums";
import { hashHistory } from "react-router";

export const navigateToEditStudentAction = (studentId: number) => {
  return function(dispatcher) {
    hashHistory.push(`/student-detail/${studentId}`);
  };
};

```

- Let's update the routes, in order to support params on the edit-student url.

  _./src/main.tsx_

```diff
      <Route path="/" component={App}>
      <IndexRoute component={LoginContainer}/>
      <Route path="login" component={LoginContainer}/>
      <Route path="student-list" component={StudentListContainer}/>
-      <Route path="student-detail" component={StudentDetailContainer}/>
+      <Route path="student-detail/:id" component={StudentDetailContainer}/>
    </Route>
  </Router>
```

- To trigger this validation we need to request it from the container component,
and then pass it down til the studentRow component.

_./src/pages/student-list/studentListContainer.tsx_

```diff
  import { connect } from 'react-redux';
  import { studentListRequestStartedAction } from "./actions/studentListRequestStarted";
  import { StudentListComponent } from './studentList';
+ import { navigateToEditStudentAction } from "./actions/navigateToEditStudent";

  const mapStateToProps = (state) => {
    return {
      studentList: state.studentReducer.studentsList,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      getStudentList: () => dispatch(studentListRequestStartedAction()),
+     editStudent: (id: number) => dispatch(navigateToEditStudentAction(id)),
    }
  }

  export const StudentListContainer = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(StudentListComponent);
```


_./src/pages/student-list/studentList.tsx_

```diff
  import * as React from "react";
  import { StudentEntity } from "../../model/student";
  import { StudentTableComponent } from "./components/studentTable";

  interface Props {
    studentList: StudentEntity[];
    getStudentList: () => void;
+   editStudent: (id: number) => void;
  }

  export class StudentListComponent extends React.Component<Props, {}> {

    componentDidMount() {
      this.props.getStudentList();
    }

    render() {
      return (
        <div>
          <h2>I"m the Student page</h2>
          <br/>
          <StudentTableComponent
            studentList={this.props.studentList}
+           editStudent={this.props.editStudent}
            />
        </div>
      );
    }
  }
```

_./src/pages/student-list/components/studentTable.tsx_

```diff
  interface Props {
    studentList: StudentEntity[];
+   editStudent: (id: number) => void;
  }

  export const StudentTableComponent = (props: Props) => {
    return (
      <table className="table">
        <StudentHeaderComponent/>
        <tbody>
          {
            props.studentList.map((student: StudentEntity) =>
              <StudentRowComponent
                key={student.id}
                student={student}
+               editStudent={props.editStudent}
              />
            )
          }
        </tbody>
      </table>
    );
  };
```
_./src/pages/student-list/components/studentRow.tsx_

```diff
  interface Props {
    student: StudentEntity;
+   editStudent: (id: number) => void;
  }

  export const StudentRowComponent = (props: Props) => {
    return (
      <tr>
        <td>
          {
            (props.student.gotActiveTraining)
            ?
            <span className="glyphicon glyphicon-ok" aria-hidden="true" />
            :
            null
          }
        </td>
        <td>
          <span>{props.student.fullname}</span>
        </td>
        <td>
          <span>{props.student.email}</span>
        </td>
        <td>
+         <span className="btn btn-link btn-xs" onClick={(e) => props.editStudent(props.student.id)}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
+         </span>
          <span className="glyphicon glyphicon-trash" aria-hidden="true" />
        </td>
      </tr>
    );
  };
```

- Let's give a try and check that we reach the page when clicking on the
student edit icon (we can place a breakpoint in studentDetail > componentDidMount
to ensure that the id param is being informed).

```cmd
npm start
```

- Time to read the parameter value from the editStudent component:

_./src/pages/student-detail/studentDetail.tsx_

```jsx

  import * as React from "react";

+  interface Props  {
+    params?: any;
+  }
+
- export const StudentDetailComponent = () => {
-   return (
-     <h2>I'm the StudentDetail page</h2>
-   )
+ export class StudentDetailComponent extends React.Component<Props, {}> {
+   componentDidMount() {
+     const studentId = this.props.params.id;
+   }
+
+   render() {
+     return (
+       <h2>I"m the Student Detail page</h2>
+     );
+   };
+ };
```

- Now that we have got the right Id, we need to load the student information, we
are going to add a new method to the _students-api_.

```diff
class StudentApi {
  studentsData: StudentEntity[];

  constructor() {
    // Let"s the mockdata whenever the singleton is instatiated
    // and the play with the inmemory array
    this.studentsData = studentsMockData;

  }

  loadStudentList(): Promise<StudentEntity[]> {
    return Promise.resolve(this.studentsData);
  }

+  getStudentById(id: number): Promise<StudentEntity> {
+    const student = this.studentsData.find(st => st.id === id);
+    return Promise.resolve(student);
+  }
}
```

- let's define an aysnc action for this and a complete one, and load the form
fields with this information.

_./src/common/actionsEnums.ts

```diff
  export const actionsEnums = {
    USERPROFILE_UPDATE_EDITING_LOGIN:  'USERPROFILE_UPDATE_EDITING_LOGIN',
    USERPROFILE_PERFORM_LOGIN : 'USERPROFILE_PERFORM_LOGIN',
-   STUDENTS_GET_LIST_REQUEST_COMPLETED: "STUDENTS_GET_LIST_REQUEST_COMPLETED"
+   STUDENTS_GET_LIST_REQUEST_COMPLETED: "STUDENTS_GET_LIST_REQUEST_COMPLETED",
+   STUDENT_GET_STUDENT_REQUEST_COMPLETED: "STUDENT_GET_STUDENT_REQUEST_COMPLETED",
  }
```
_./src/pages/student-detail/actions/getStudentRequestCompleted.ts_

```javascript
import { actionsEnums } from "../../../common/actionsEnums";
import { StudentEntity } from "../../../model/student";

export const getStudentRequestCompletedAction = (student: StudentEntity) => {
  return {
    type: actionsEnums.STUDENT_GET_STUDENT_REQUEST_COMPLETED,
    payload: student,
  };
};
```

_./src/pages/student-detail/actions/getStudentRequestStart.ts_

```javascript
import { actionsEnums } from "../../../common/actionsEnums";
import { StudentEntity } from "../../../model/student";
import { studentApi } from "../../../rest-api/student-api";
import { getStudentRequestCompletedAction } from "./getStudentRequestCompleted";

export const getStudentRequestStartAction = (studentId: number) => {
  return function(dispatcher) {
    const promise = studentApi.getStudentById(studentId);

    promise.then(
      data => {
        dispatcher(getStudentRequestCompletedAction(data));
      }
    );

    return promise;
  };
};
```

- Let's update the reducer

_./src/reducers/student.ts_

```diff
  import { actionsEnums } from "../common/actionsEnums";
  import { StudentEntity } from "../model/student";

  class StudentState  {
    studentsList: StudentEntity[];
+   editingStudent: StudentEntity;

    public constructor() {
      this.studentsList = [];
+     this.editingStudent = new StudentEntity();
    }
  }

  export const studentReducer =  (state: StudentState = new StudentState(), action) => {
    switch (action.type) {
      case actionsEnums.STUDENTS_GET_LIST_REQUEST_COMPLETED:
        return handleGetStudentList(state, action.payload);
+     case actionsEnums.STUDENT_GET_STUDENT_REQUEST_COMPLETED:
+       return handleGetStudent(state, action.payload);
    }

    return state;
  };

  const handleGetStudentList = (state: StudentState, payload: StudentEntity[]) => {
    return {
      ...state,
      studentsList: payload
    }
  };

+ const handleGetStudent = (state: StudentState, payload: StudentEntity[]) => {
+   return {
+     ...state,
+     editingStudent: payload
+   }
+ };
```

- Let's go back to the studentDetail component, we are going to expose a property
that will hold the student being edited, add an function prop to load the setudets:

_./src/pages/student-detail/studentDetail.tsx_

```diff
  import * as React from "react";
+ import { StudentEntity } from "../../model/student";

  interface Props  {
    params?: any;
+   student: StudentEntity;
+   getstudent: (id: number) => void;
  }

  export class StudentDetailComponent extends React.Component<Props, {}> {
    componentDidMount() {
-     const studentId = this.props.params.id;
+     const studentId: number = Number(this.props.params.id);
+     this.props.getstudent(studentId);
   }

  render() {
-   return (
-     <h2>I'm the Student Detail page</h2>
+   if (!this.props.student)
+     return <span>Student Info loading...</span>
+
+
+   return (
+     <div>
+       <h2>Im the Student Detail page</h2 >
+       <span>Test, student name {this.props.student.fullname}</span >
+     </div >
+   );
+ }
};
```

- We need to update the container:

_./src/pages/student-detail/studentDetailContainer.tsx_

```diff
  import { connect } from 'react-redux';
  import { StudentDetailComponent } from './studentDetail';
+ import { getStudentRequestStartAction } from "./actions/getStudentRequestStart";

  const mapStateToProps = (state) => {
    return {
+      student: state.studentReducer.editingStudent,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
+     getstudent: (id: number) => dispatch(getStudentRequestStartAction(id)),
    }
  }

  export const StudentDetailContainer = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(StudentDetailComponent);
```


- Let's debug and check that everything is working end to end.

```cmd
npm start
```

- It's time to build a form that will contain the data to be edited, we will
define it using some special Id's to make it easier to get the properties updated.
Let's start by creating a common input component.

_./src/common/components/Input.tsx_

```jsx
import * as React from "react";

interface Props {
  name: string;
  label: string;
  onChange: any;
  placeholder?: string;
  value: string;
  error?: string;
}

export class Input extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    let wrapperClass: string = "form-group";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + "has-error";
    }
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input type="text"
            name={this.props.name}
            className="form-control"
            placeholder={this.props.placeholder}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
}
```

- Let's build the form layout.

_./src/pages/student-detail/components/studentForm.tsx_


```jsx
import * as React from "react";
import { Input } from "../../../common/components/Input";
import { StudentEntity } from "../../../model/student";

interface Props {
  student: StudentEntity;
  fireFieldValueChanged: (viewModel: any, fieldName: string, value: any) => void;
  saveStudent: (student: StudentEntity) => void;
}

export const StudentForm = (props: Props) => {

  const updateStudentFromUI = (event) => {
    let field = event.target.name;
    let value = event.target.value;

    props.fireFieldValueChanged(props.student, field, value);
  };

  const onSave = (event) => {
    event.preventDefault();
    props.saveStudent(props.student);
  };


  return (
    <form>
      <h1>Customer Form</h1>

      <Input
        name="fullname"
        label="full name"
        value={props.student.fullname}
        onChange={updateStudentFromUI.bind(this)}
      />

      <Input
        name="email"
        label="email"
        value={props.student.email}
        onChange={updateStudentFromUI.bind(this)}
      />

      <button type="submit" className="btn btn-default" onClick={onSave.bind(this)}>
        Save
      </button>
    </form>
  );
};
```

- Let's instantiate it in the studentDetail page.

_./src/pages/student-detail/studentDetail.tsx_

```diff
  import * as React from "react";
  import { StudentEntity } from "../../model/student";
+ import { StudentForm } from "./components/studentForm";

  interface Props  {
    params?: any;
    student: StudentEntity;
    getstudent: (id: number) => void;
+   fireFieldValueChanged: (viewModel: any, fieldName: string, value: any) => void;
+   saveStudent: (student: StudentEntity) => void;
  }

  export class StudentDetailComponent extends React.Component<Props, {}> {
    componentDidMount() {
      const studentId: number = Number(this.props.params.id);
      this.props.getstudent(studentId);
    }

    render() {
+      if (!this.props.student)
+        return <span>Student Info loading...</span>;

       return (
-        <div>
-          <h2>Im the Student Detail page</h2 >
-          <span>Test, student name {this.props.student.fullname}</span >
-        </div >
-      );
+        <StudentForm
+          student={this.props.student}
+          fireFieldValueChanged={this.props.fireFieldValueChanged}
+          saveStudent={this.props.saveStudent}
+        />
+      );
    };
  };
```

- Before defining this bindings in the _studentDetailContainer_ we need to
define the needed actions. Let's start by defining the enums in _./src/common/actionEnums.ts_:

 _./src/common/actionEnums.ts_

```diff
export const actionsEnums = {
  USERPROFILE_UPDATE_EDITING_LOGIN:  'USERPROFILE_UPDATE_EDITING_LOGIN',
  USERPROFILE_PERFORM_LOGIN : 'USERPROFILE_PERFORM_LOGIN',
  STUDENTS_GET_LIST_REQUEST_COMPLETED: "STUDENTS_GET_LIST_REQUEST_COMPLETED",
  STUDENT_GET_STUDENT_REQUEST_COMPLETED: "STUDENT_GET_STUDENT_REQUEST_COMPLETED",
+  STUDENT_FIELD_VALUE_CHANGED: "STUDENT_FIELD_VALUE_CHANGED",
+  STUDENT_FIELD_VALUE_CHANGED_COMPLETED: "STUDENT_FIELD_VALUE_CHANGED_COMPLETED",
+  STUDENT_SAVE_COMPLETED: "STUDENT_SAVE_COMPLETED",
}
```

- Now let's the define an async action (we will see later on why this)
for the _studentFieldValueChanged_ action.

_./src/pages/student-detail/actions/studentFieldValueChangedCompleted.ts_

```javascript
import { actionsEnums } from "../../../common/actionsEnums";

export const studentFieldValueChangedCompleted = (fieldName: string, value: string) => {
  return {
    type: actionsEnums.STUDENT_FIELD_VALUE_CHANGED_COMPLETED,
    payload: {
      fieldName : fieldName,
      value : value
    }
  };
};
```

_./src/pages/student-detail/actions/studentFieldValueChangedStart.ts_

```javascript
import { studentFieldValueChangedCompleted } from "./studentFieldValueChangedCompleted";

export function studentFieldValueChangedStart(viewModel: any, fieldName: string, value: any) {
  return (dispatcher) => {
    // This will change when we add validations to this action
    dispatcher(studentFieldValueChangedCompleted(fieldName, value ));
  };
}
```



- And let's update the student reducer _./src/reducers/student.ts_:

_./src/reducers/student.ts_

```diff
  export const studentReducer =  (state: StudentState = new StudentState(), action) => {
    switch (action.type) {
      case actionsEnums.STUDENTS_GET_LIST_REQUEST_COMPLETED:
        return handleGetStudentList(state, action.payload);
     case actionsEnums.STUDENT_GET_STUDENT_REQUEST_COMPLETED:
       return handleGetStudent(state, action.payload);
+    case actionsEnums.STUDENT_FIELD_VALUE_CHANGED_COMPLETED:
+      return handleFieldValueChanged(state, action.payload);
    }

    return state;
  };

+ const handleFieldValueChanged = (state: StudentState, payload) => {
+   const newStudent = {
+      ...state.editingStudent,
+      [payload.fieldName]: payload.value
+   };
+
+   return {
+      ...state,
+      editingStudent: newStudent
+   }
+ }

// (...)
```
- Time to wire up container with component

_./src/pages/student-detail/studentDetailContainer.tsx_

```diff
  import { connect } from 'react-redux';
  import { StudentDetailComponent } from './studentDetail';
  import { getStudentRequestStartAction } from "./actions/getStudentRequestStart";
+ import { studentFieldValueChangedStart } from "./actions/studentFieldValueChangedStart";

  const mapStateToProps = (state) => {
    return {
      student: state.studentReducer.editingStudent,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      getstudent: (id: number) => dispatch(getStudentRequestStartAction(id)),
+        fireFieldValueChanged: (
+          viewModel: any,
+          fieldName: string,
+          value: any) => dispatch(studentFieldValueChangedStart(viewModel, fieldName, value)
+      ),
    }
  }

  export const StudentDetailContainer = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(StudentDetailComponent);
```

- Getting started with the save functionallity, we have to define a mock functionallity
in the api, since we are playing with in memory collections, we have to perform some
inmmutable replace operation just to avoid the same students data object being updated
automatically in the ui.

_./src/rest-api/student-api.ts_

```diff
  import { StudentEntity } from "../model/student";
  import { studentsMockData } from "./mock-data";

  class StudentApi {
    studentsData: StudentEntity[];

    constructor() {
      // Let"s the mockdata whenever the singleton is instatiated
      // and the play with the inmemory array
      this.studentsData = studentsMockData;

    }

+   saveStudent(student: StudentEntity): Promise<boolean> {
+     const index = this.studentsData.findIndex(st => st.id === student.id);
+
+     // Just to ensure we get a new object (no mutability)
+     this.studentsData = this.studentsData
+     .slice(0, index)
+     .concat([student])
+     .concat(this.studentsData.slice(index + 1));
+
+     return Promise.resolve(true);
+   }

  // (...)
  }

  export const studentApi = new StudentApi();
```

- Let's define as well an async action for the _saveStudent_ action.

_./src/pages/student-detail/actions/studentSaveRequestCompleted.ts_

```javascript
import { actionsEnums } from "../../../common/actionsEnums";

export const studentSaveRequestCompletedAction = (succeeded: boolean) => {
  return {
    type: actionsEnums.STUDENT_SAVE_COMPLETED,
    payload: succeeded,
  };
};
```

_./src/pages/student-detail/actions/studentSaveRequestStart.ts_

```javascript
import { actionsEnums } from "../../../common/actionsEnums";
import { StudentEntity } from "../../../model/student";
import { studentApi } from "../../../rest-api/student-api";
import { studentSaveRequestCompletedAction } from "./studentSaveRequestCompleted";

export const studentSaveRequestStart = (student: StudentEntity) => {
  return function(dispatcher) {
    const promise = studentApi.saveStudent(student);

    promise.then(
      data => {
        dispatcher(studentSaveRequestCompletedAction(data));
      }
    );

    return promise;
  };
};
```

- About the reducer we should handle some change state, e.g. reset a _dirty_ flag,
and we should control in the action if the save action has failed, notify or
do something about that, we will leave up to you to implement it as an excercise.


- Let's wire up the container an component.

_./src/pages/student-detail/studentDetailContainer.tsx_

```diff
  import { connect } from 'react-redux';
  import { StudentDetailComponent } from './studentDetail';
  import { getStudentRequestStartAction } from "./actions/getStudentRequestStart";
  import { studentFieldValueChangedStart } from "./actions/studentFieldValueChangedStart";
+ import { StudentEntity } from "../../model/student";
+ import { studentSaveRequestStart } from "./actions/studentSaveRequestStart";

  const mapStateToProps = (state) => {
    return {
      student: state.studentReducer.editingStudent,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      getstudent: (id: number) => dispatch(getStudentRequestStartAction(id)),
+     saveStudent: (student: StudentEntity) => dispatch(studentSaveRequestStart(student)),
      fireFieldValueChanged: (
        viewModel: any,
        fieldName: string,
        value: any) => dispatch(studentFieldValueChangedStart(viewModel, fieldName, value)
      ),
    }
  }

  export const StudentDetailContainer = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(StudentDetailComponent);
```

- Now if run the sample we can check that the save operation is performed by
updating the student detail and going back to the list view we can see that the
update has been performed (remember that we are using a mock api, that is only
persisted in memory, if we stop and start the app again it will load the
original data seed).

```cmd
npm start
```
