import React, { Component } from 'react';

const Item = (item, idx) => {
    return (
      <li key={'li_' + idx} >
        <div className="left">
          <input type="checkBox" defaultChecked={item.complete} onClick={(e) => { this.handleClick(e, idx) }} id={'checkBox_' + idx} />
          <label htmlFor={'checkBox_' + idx} className={item.complete ? 'complete' : undefined} >{item.task}</label>
        </div>
        <div className="right">
          <input type="button" value="删除" onClick={() => { this.handleDel(idx) }} />
        </div>
      </li>
    )
  }

export default Item;