import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class FooterTabsIconExample extends Component {
  constructor() {
    super();
    this.state = {
      isMicActive: false
    }
  }

  onPressButton() {
    this.toggleIsMicActive();
  }

  toggleIsMicActive() {
    this.setState({
      isMicActive: !this.state.isMicActive
    })
  }

  render() {
    return (
      <Footer>
        <FooterTab>

          <Button active={this.state.isMicActive} onPress={() => this.onPressButton()} >
            <Icon active={this.state.isMicActive} name="mic" />
          </Button>

        </FooterTab>
      </Footer>
    );
  }
}