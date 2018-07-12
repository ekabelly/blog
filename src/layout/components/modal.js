import React from 'react';

export default ({pic, index})=>
(<div id={'picModal'+index} className="modal fade" tabIndex="-1" role="dialog">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <img src={pic} alt='תמונה' className='modal-pic' />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default center-block" data-dismiss="modal">סגור</button>
      </div>
    </div>
  </div>
</div>);