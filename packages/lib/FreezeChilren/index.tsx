// @refresh reset
import {Component} from 'react';

class FreezeChildren extends Component<any, any> {
  shouldComponentUpdate(nProps: any) {
    return Object.keys(nProps).some(
      e => e !== 'children' && nProps[e] !== this.props[e],
    );
  }

  render() {
    const {children} = this.props;
    return children;
  }
}

export default FreezeChildren;
