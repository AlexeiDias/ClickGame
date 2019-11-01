import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import friends from "./components/Counter";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };
  // set wins count to start at 0
  wins = 0

  // The goal of this game is: If you click on a card with a different name of the name of the card last clicked the friends array will double it's size. 
  // If the gamer click on a card with the name equal of the name of the card last clicked the, both cards will be removed.

  removeFriend = name => {
    // Filter this.state.friends for friends with an name not equal to the name being removed
    const friends = this.state.friends.filter(friend => friend.name !== name);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    shuffle(friends);
  };

// This peace of code was intended to double the size of the original friends array as punishment for clickling on a card that has a different name.
  doubleFriend = name => {
    // double this.state.friends for friends with an name not equal to the name being removed
    const friends = this.state.friends * 2;
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    shuffle(friends);
  };

  // This function is called by the click of the user on a card on line 23 of the index.js file.
    actionFriend(name) {
  //loop through friends array and check if friends.name = name 
    for  (var i = 0; i < friends.length; i++) {
      //  if friends.name is equal to name remove card
      if (friends[i].name === name) {
        // wins counter adds 1 win
        wins++
        console.log(name)
        this.removeFriend(name)
        // if friends.name is not equal to name double friends array
        } else { 
        this.doubleFriend(name)

      }
    }
  }

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <Counter/>
        {this.state.friends.map(friend => (
          <FriendCard
          // this line of code calls the actionFriends function when clicked
            actionFriend={this.actionFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
