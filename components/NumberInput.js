import React, {Component} from 'react';
import {TextInput, View, TouchableHighlight, Text} from 'react-native';
//import Translator from './TranslatorComponent'



class NumberInput extends Component {

    constructor(props){
        super(props);

        this.state = {
            text: '',
            translatedText: ''
        }
    }

    translate = () => {

        function translator (input) {
            //input will be of type string
            let output = '';
            let regs = /[A-Za-z]/;
            for(let i in input){
                let temp = input[i];
        
                if(regs.test(temp)){
        
                    temp = temp.toLowerCase();
        
                    if(/[abc]/.test(temp)){
                        temp = 2;
                    }
                    else if (/[def]/.test(temp)){
                        temp = 3;
                    }
                    else if (/[ghi]/.test(temp)){
                        temp = 4;
                    }
                    else if (/[jkl]/.test(temp)){
                        temp = 5;
                    }
                    else if (/[mno]/.test(temp)){
                        temp = 6;
                    }
                    else if (/[pqrs]/.test(temp)){
                        temp = 7;
                    }
                    else if (/[tuv]/.test(temp)){
                        temp = 8;
                    }
                    else if (/[wxyz]/.test(temp)){
                        temp = 9;
                    }
        
                }
        
                output = output + temp;
            }
        /*
            return (
                <View>
                    <Text>{output}</Text>
                </View>
            );*/
        
            return output;
            //return input;
        
        
        }
       
        this.setState({
            translatedText: translator(this.state.text)
        });

    }



    render(){
        return (

            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Enter the number to translate"
                    maxLength={11}
                    onSubmitEditing={this.translate}
                    onChangeText={text => this.setState({text: text})}/>
                <TouchableHighlight onPress={this.translate}>
                    <Text>Translate</Text>
                </TouchableHighlight>
                <Text>
                    {this.state.translatedText}
                </Text>
            </View>


    )



    }

}
export default NumberInput;
