import React from 'react';

class Heading extends React.Component {
  render() {
    const { props } = this;

    const id = props.title.replace(/\s+/g, '-');

    let description;
    if (props.description) {
      description = <div className='styledocs-description'>
        {props.description}
      </div>;
    }

    return (
      <div className='styledoc-heading-container'>
      <div
        id={id}
        className={`styledoc-heading-title-${props.level}`}
      >
        <a href={`#${id}`}>
          {props.title}
        </a>
      </div>
        {description}
      </div>
    );
  }
}

Heading.propTypes = {
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

export { Heading };
