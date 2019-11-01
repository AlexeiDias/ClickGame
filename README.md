
### Game description: 

The gamer are presented with a collection of mixed cards, each card has a copy of itself.
If gamer needs to click on a card, find it's copy and click on it. If gamer click on a card witha  different name of the name of the card last clicked the card collection  will double it's size as punishment. 
If the gamer click on a card with the name equal of the name of the card last clicked the, both cards will be removed the wins score count goes up and the game gets closer to the end.
After a play the card colletion shuffles for the next play.

## Sudo code for Click Game

At a click of a card, the event listener actionFriend on index.js line 23 is activated.
On app.js file the actionFriend function evaluates if the name of the card first clicked and the name of second card clicked are the same. 
If they are the same function removeFriend is activated and it will remove both cards from the card collection, the score count goes up and the card collection is shuffled for the next play. 
If the name of the card first clicked and the name of the second card clicked are not equal. The card collection will double it's size. And the card collection is shuffled for the next play.


