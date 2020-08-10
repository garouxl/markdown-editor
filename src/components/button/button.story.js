import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Button from './index'

import '../../css/style.css'

const stories = storiesOf('Button', module)

stories.addDecorator((story) => (
  <div>
    {story()}
    <div
      style={{
        width: '200px',
        borderWidth: '17px 0 0',
        borderStyle: 'solid',
        borderRadius: '6px 6px 0 0',
        borderColor: '#ffb700',
        zIndex: '2',
        position: 'relative'
      }}
    />
  </div>

))

stories.add('Button default', () => (
  <Button onClick={action('ação padrão')}>
    padrão
  </Button>
))

stories.add('Button create', () => (
  <Button onClick={action('created file')} kind='button-create'>
    criar
  </Button>
))

stories.add('Button remove', () => (
  <Button onClick={action('removed file')} kind='button-remove'>
    remover
  </Button>
))
