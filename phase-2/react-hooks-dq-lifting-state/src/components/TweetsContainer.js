import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedUserId, setSelectedUserId] = useState(users[0].id)

  function handleChangeUser(userId){
    setSelectedUserId(userId)
  }

  function handleTweetLike(likedTweet){
    // update the users array
    const updatedUsers = users.map(user => {
      // check if the user is the selectedUser
      if (user.id !== selectedUserId) return user
      // if so, return a new object to update this user
      return {
        // copy in all of the users attributes
        ...user,
        // update the array of tweets
        tweets: user.tweets.map(tweet => {
          // check if tweet is one being liked
          if (tweet !== likedTweet) return tweet
          //if so, return a new object with updated likes
          return {
            ...tweet,
            favorite_count: tweet.favorite_count + 1
          }
          // phew!
        })
      }
    })
    setUsers(updatedUsers)
  }

  const selectedUser = users.find(user => user.id === selectedUserId)

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} onChangeUser={handleChangeUser} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={selectedUser} handleTweetLike={handleTweetLike}/>
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
