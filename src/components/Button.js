import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyles}>
            <Text style={styles.buttonTextStyles}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonTextStyles: {
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
