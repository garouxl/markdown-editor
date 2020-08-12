import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import SaveMessage from './index'

import '../../css/style.css'

const stories = storiesOf('SaveMessage', module)

stories.addDecorator((story) => (
  <div style={{display: 'flex', flexDirection: 'column' , width: '140px'}}>
    {story()}
    <div
      style={{
        width: '200px',
        borderWidth: '11px 0 0',
        borderStyle: 'solid',
        borderRadius: '6px 6px 0 0',
        borderColor: '#ffb700',
        zIndex: '2',
        position: 'relative'
      }}
    />
  </div>

))

stories.add('SaveMessage isSaving == null', () => (
  <SaveMessage isSaving={null} />
))

stories.add('SaveMessage isSaving == true', () => (
  <SaveMessage isSaving />
))

stories.add('SaveMessage isSaving == false', () => (
  <SaveMessage isSaving={false} />
))
