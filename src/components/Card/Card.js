import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import StyledCard from './StyledCard';
import StyledInput from './StyledInput';

const Types = {
  CARD: 'card',
};

const itemSource = {
  beginDrag(props) {
    const card = { src: props.src, id: props.id }
    return card
  },
  endDrag(props, monitor, component) {
    return props.handleDrop(props.src)
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Card extends Component {
  render() {
    const {
      isDragging,
      connectDragSource,
      placeholder,
      definition,
    } = this.props;
    return (
      <StyledCard w={1} mb={2}>
        <StyledInput placeholder={placeholder} value={definition} type="text" />
        {!isDragging}
      </StyledCard>
    );
  }
}

export default DragSource(Types.CARD, itemSource, collect)(Card);



