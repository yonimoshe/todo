import React, { Component } from 'react';
import Card from './components/Card/Card';
import Board from './components/Board/Board';
import InfoModal from './components/InfoModal/InfoModal';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
          currentInput: '',
          activeQuarterNumber: null,
          quarter1: [],
          quarter2: [],
          quarter3: [],
          quarter4: []
      }
    }

    inputHandler = event => this.setState({currentInput: event.target.value})

    deleteItemHandler = (itemIndex, quarterNumber) => {
      if (quarterNumber === 'quarter_1')
      {
        let assignmentsArray = JSON.parse(localStorage.getItem("quarter_1"))
        assignmentsArray.splice(itemIndex, 1)
        localStorage.setItem("quarter_1", JSON.stringify(assignmentsArray))
        this.setState({quarter1: assignmentsArray})
      }
      if (quarterNumber === 'quarter_2')
      {
        let assignmentsArray = JSON.parse(localStorage.getItem("quarter_2"))
        assignmentsArray.splice(itemIndex, 1)
        localStorage.setItem("quarter_2", JSON.stringify(assignmentsArray))
        this.setState({quarter2: assignmentsArray})
      }
      if (quarterNumber === 'quarter_3')
      {
        let assignmentsArray = JSON.parse(localStorage.getItem("quarter_3"))
        assignmentsArray.splice(itemIndex, 1)
        localStorage.setItem("quarter_3", JSON.stringify(assignmentsArray))
        this.setState({quarter3: assignmentsArray})
      }
      if (quarterNumber === 'quarter_4')
      {
        let assignmentsArray = JSON.parse(localStorage.getItem("quarter_4"))
        assignmentsArray.splice(itemIndex, 1)
        localStorage.setItem("quarter_4", JSON.stringify(assignmentsArray))
        this.setState({quarter4: assignmentsArray})
      }
    }

    activeQuarterHandler = (quarterNumber) => {
      if (quarterNumber === 'quarter_1')
        this.setState({activeQuarterNumber: 1})
      if (quarterNumber === 'quarter_2')
        this.setState({activeQuarterNumber: 2})
      if (quarterNumber === 'quarter_3')
        this.setState({activeQuarterNumber: 3})
      if (quarterNumber === 'quarter_4')
        this.setState({activeQuarterNumber: 4})
    }

    addAssignmentHandler = (quarterNumber) => {
      if (quarterNumber === 'quarter_1' && this.state.currentInput!=='') {
        let assignmentString = this.state.currentInput;
        let assignmentsArray = [...this.state.quarter1]
        assignmentsArray.push(assignmentString)
        this.setState({quarter1: assignmentsArray})
        assignmentString = ''
        this.setState({currentInput: assignmentString})
        localStorage.setItem("quarter_1", JSON.stringify(assignmentsArray))
      }
      if (quarterNumber === 'quarter_2' && this.state.currentInput!=='') {
        let assignmentString = this.state.currentInput;
        let assignmentsArray = [...this.state.quarter2]
        assignmentsArray.push(assignmentString)
        this.setState({quarter2: assignmentsArray})
        assignmentString = ''
        this.setState({currentInput: assignmentString})
        localStorage.setItem("quarter_2", JSON.stringify(assignmentsArray))
      }
      if (quarterNumber === 'quarter_3' && this.state.currentInput!=='') {
        let assignmentString = this.state.currentInput;
        let assignmentsArray = [...this.state.quarter3]
        assignmentsArray.push(assignmentString)
        this.setState({quarter3: assignmentsArray})
        assignmentString = ''
        this.setState({currentInput: assignmentString})
        localStorage.setItem("quarter_3", JSON.stringify(assignmentsArray))
      }
      if (quarterNumber === 'quarter_4' && this.state.currentInput!=='') {
        let assignmentString = this.state.currentInput;
        let assignmentsArray = [...this.state.quarter4]
        assignmentsArray.push(assignmentString)
        this.setState({quarter4: assignmentsArray})
        assignmentString = ''
        this.setState({currentInput: assignmentString})
        localStorage.setItem("quarter_4", JSON.stringify(assignmentsArray))
      }
    }

    UNSAFE_componentWillMount () {
      localStorage.getItem("quarter_1") && this.setState({quarter1: JSON.parse(localStorage.getItem("quarter_1"))})
      localStorage.getItem("quarter_2") && this.setState({quarter2: JSON.parse(localStorage.getItem("quarter_2"))})
      localStorage.getItem("quarter_3") && this.setState({quarter3: JSON.parse(localStorage.getItem("quarter_3"))})
      localStorage.getItem("quarter_4") && this.setState({quarter4: JSON.parse(localStorage.getItem("quarter_4"))})
    }

  render() {
    return (
          <>
          <div className="area" >
            <ul className="circles mb-0">
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
            </ul>
            
              <div className='container'>
                <div className='row'>
                   <div className="col-12 d-flex justify-content-center col-sm-6 d-sm-flex justify-content-sm-start align-items-sm-center p-sm-0">
                     <InfoModal />
                   </div>
                   <div className="col-12 col-sm-6 d-sm-flex justify-content-sm-end p-sm-0">
                     <div className="my-2 box-sizing: border-box p-0">
                        <input type="text" className="form-control" placeholder="Enter new assignment" onChange={this.inputHandler} value={this.state.currentInput} />
                           <div className="input-group-append justify-content-between mt-1" id="button-addon4">
                              <button className="btn btn-info mr-1 border border-white" onClick={() => this.addAssignmentHandler('quarter_1')}>Quarter 1</button>
                              <button className="btn btn-info mr-1 border border-white" onClick={() => this.addAssignmentHandler('quarter_2')}>Quarter 2</button>
                              <button className="btn btn-info mr-1 border border-white" onClick={this.addAssignmentHandler.bind(this,'quarter_3')}>Quarter 3</button>
                              <button className="btn btn-info border border-white" onClick={this.addAssignmentHandler.bind(this,'quarter_4')}>Quarter 4</button>
                           </div>
                      </div>
                   </div>
                </div>
              </div>

               <div className='container'>
                <div className='row'>
                          <div className='col-md-6'>
                             <div className='row'>
                                <div className='col-md-6 p-0' onClick={() => this.activeQuarterHandler('quarter_1')}>
                                <Card title='Important & Urgent'
                                      id = '1'
                                      subtitle='Quarter 1'
                                      assignments={this.state.quarter1.length}
                                      activeQuarterNumber={this.state.activeQuarterNumber} />
                                </div>
                                <div className='col-md-6 p-0' onClick={() => this.activeQuarterHandler('quarter_2')}>
                                <Card title='Important & Not urgent'
                                      id = '2'
                                      subtitle='Quarter 2'
                                      assignments={this.state.quarter2.length}
                                      activeQuarterNumber={this.state.activeQuarterNumber}/>
                                </div>
                             </div>
               <div className='row'>
                             <div className='col-md-6 p-0' onClick={() => this.activeQuarterHandler('quarter_3')}>
                                 <Card title='Not Important & Urgent'
                                       id = '3'
                                       subtitle='Quarter 3'
                                       assignments={this.state.quarter3.length}
                                       activeQuarterNumber={this.state.activeQuarterNumber}/>
                                 </div>
                             <div className='col-md-6 p-0' onClick={() => this.activeQuarterHandler('quarter_4')}>
                                 <Card title='Not Important & Not urgent'
                                       id = '4'
                                       subtitle='Quarter 4'
                                       assignments={this.state.quarter4.length}
                                       activeQuarterNumber={this.state.activeQuarterNumber}/>
                                 </div>
                              </div>
                           </div>
                       <div className='col-md-6 pl-md-2 mt-md-0 px-0 mt-2'>
                          <Board quarter1={this.state.quarter1}
                                 quarter2={this.state.quarter2}
                                 quarter3={this.state.quarter3}
                                 quarter4={this.state.quarter4}
                                 activeQuarter = {this.state.activeQuarterNumber}
                                 deleteItem= {(index , number) => this.deleteItemHandler.bind(this, index,number)} />
                       </div>
                  </div>
               </div>
            </div >
          </>
    );
  }
}

export default App;
