import React from 'react';
import {Route} from 'react-router-dom';
import TasksNav from './tasks-nav';
import Feeding from './feeding';
import Supplements from './supplements';
import Testing from './testing';
import Maintenance from './maintenance';
import {connect} from 'react-redux';
import { fetchTasks } from '../../actions/tasks';
import Create from './create';

class Tasks extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  render () {
    return (
      <div>
        <h2>Tasks tab</h2>
        <TasksNav />
        <section>
          <Route exact path='/dashboard/tasks/feeding' component={Feeding}/>
          <Route exact path='/dashboard/tasks/supplements' component={Supplements} />
          <Route exact path='/dashboard/tasks/testing' component={Testing} />
          <Route exact path='/dashboard/tasks/maintenance' component={Maintenance} />
        </section>
        <Create />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  creating: state.tasks.creating
})

export default connect(mapStateToProps)(Tasks);