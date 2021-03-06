/*
Copyright IBM Corporation 2020

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React from 'react';
import { TextInput } from '@patternfly/react-core';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problem: props.problem
    };
    this.handleTextInputChange = value => {
      var problem = this.state.problem
      problem.solution.answer = [value];
      this.props.changeSolution(problem.solution.answer);
      this.setState({problem:problem})
    };
  }

  render() {
    const { problem } = this.state;

    return (
      <div>
      <span id={problem.id}>
        {problem.description}
      </span>
      <TextInput value={problem.solution.answer} type="text" onChange={this.handleTextInputChange} aria-label="text input example" />
      </div>
    );
  }
}

export { Input }
