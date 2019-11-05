'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
	/* React.createElement(component, props, ...children)  */
    return React.createElement('button', { onClick: () => this.setState({ liked: true }) }, 'Like'  );
  }
}

/* reference to HTML DOM node */
const domContainer = document.querySelector('#like_button_container');

/* render React Element as Html Node in domContainer Node*/
ReactDOM.render(React.createElement(LikeButton), domContainer);
