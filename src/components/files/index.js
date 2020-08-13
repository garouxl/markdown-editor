import React from 'react'

import './style.css'

const Files = ({ files, hasFiles, onHandleOpenFile }) => {
  return (hasFiles && (
    <div className='files-list'>
      <p className='files-title'>
        Lista de arquivo:
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
