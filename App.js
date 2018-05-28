import React from 'react';
import { Container, Text, Content } from 'native-base';
import firebase from 'firebase';

import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import MainContent from "./components/Content";

const firebaseConfig ={
      apiKey: "AIzaSyB7anyLmf0dexglB-P-kOfnJR_3Vh3zGbA",
      authDomain: "memory-value.firebaseapp.com",
      databaseURL: "https://memory-value.firebaseio.com",
      projectId: "memory-value",
      storageBucket: "memory-value.appspot.com",
      messagingSenderId: "1091090597870"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      firebase: firebaseApp
    }
  }

  componentWillMount() {
    this.checkLogin();
  }

  componentDidMount() {
    console.log(this.state);
  }


  checkLogin() {
    // 現在ログインしているユーザーを取得する
    let result;
    this.state.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log("success checkLogin");
        console.log(user);

        this.setState({
          isLogin: true
        })

      } else {
        // No user is signed in.
        console.log("cannnot get current_user");

        result = false;
      }
    });
  }

  doLogin(email, password) {
    // register user
    this.state.firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({
        isLogin: true
      });
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {

        this.setState({
          isLogin: true
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
    });

  }

  doLogout() {
    this.state.firebase.auth().signOut()
    .then(() => {
      this.setState({ isLogin: false })
    })
  }

  render() {
    return (
      <Container>
        <Header doLogout={() => this.doLogout()} />

        <Content>
          <LoginForm isLogin={this.state.isLogin} doLogin={(email, password) => this.doLogin(email, password)}/>
          <MainContent show={this.state.isLogin} firebase={this.state.firebase}/>
        </Content>

      </Container>
    );
  }
}
