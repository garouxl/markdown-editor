import React from 'react'

import './style.css'

const Files = ({ files, onHandleOpenFile }) => {
  return (Boolean(Object.keys(files).length) && (
    <div className='files-list'>
      <p className='files-title'>
        {Object.keys(files).length === 1 ? 'Arquivo:' : 'Arquivos:'}
      </p>
      <ul>
        {Object.keys(files).map((fileId) => (
          <li key={fileId}>
            <button
              className='files-button'
              onClick={onHandleOpenFile(fileId)}
            >
              {files[fileId].title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ))
}

export default Files
