import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native-web";

const LoginScreen = () => {
const [email,setEmail] = useState ('');
const [password, setPassword] = useState('');

const handlelLgin = () => {
     console.log(´login com Email: ${email} e senha:  ${password}´);
};
   
};


















