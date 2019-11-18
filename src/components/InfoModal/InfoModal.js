import React from 'react';

const infoModal = () => {

  return(
    <>
        <button type="button" className="btn btn-info btn-sm" style={{height: '4em', border:'1px solid #fff' }} data-toggle="modal" data-target="#exampleModalScrollable">
          <i className="fas fa-info-circle fa-3x"></i>
        </button>

        <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalScrollableTitle">Get Started</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                  <div className="modal-body">
                   Welcome to your time management app!
                   Working with it couldn't be simpler.
                   <br/>
                   The app was built to help entrepreneurs manage
                   their time and tasks more effectively.
                   <br/>
                   Ok, so how does it work?
                   <br/>
                   Ever one of the four quarters on the screen represent the assignments definition:<br/>
                   quarter 1 represent "Important & Urgent".<br/>
                   quarter 2 represent "Important & Not urgent".<br/>
                   quarter 3 represent "Not Important & Urgent".<br/>
                   quarter 4 represent "Not Important & Not urgent".<br/>
                   <br/>
                   Click on the quarter to see the assignments that he contains.
                   <br/><br/>            
                   At the top right of the screen there is an input line and four
                   different buttons.
                   Enter the assignment description in the input bar and classify it into
                   one of the quarters using the appropriate button.
                   <br/>
                   Assignments can be added and deleted, the number of the current
                   assignments number appears on each card.
                   <br/>
                   The app is responsive and can be used on mobile devices as well!
                   <br/>
                   So, Without unnecessary talks let's get to started!
                   <br/>
                  </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-info" data-dismiss="modal">Got It!</button>
              </div>
            </div>
          </div>
        </div>
  </>
  );
}

export default infoModal
