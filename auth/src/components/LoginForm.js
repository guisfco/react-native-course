import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@email.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;