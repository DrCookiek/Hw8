function User(userName) {
  (this.theUserName = userName),
    (this.followers = []),
    (this.ifollow = []),
    (this.followAfter = function (member) {
      this.ifollow.push(member);
      member.followers.push(this);
    });

  this.sendMessage = function () {
    this.followers.forEach((someone) => {
      console.log(
        this.theUserName +
          " liked " +
          someone.theUserName +
          "'s tweet to show appreciation"
      );
    });
  };
  this.getMessage = function () {
    this.ifollow.forEach((somebody) => {
      console.log(
        somebody.theUserName + " started following " + this.theUserName + "!"
      );
    });
  };
}

let userA = new User("DulceDeLeche");
let userB = new User("Tiramisu");
let userC = new User("CookieDough");
let userD = new User("ChunkyMonkey");

userA.followAfter(userD);
userA.followAfter(userB);
userC.followAfter(userA);
userB.followAfter(userA);
userD.followAfter(userA);
userB.followAfter(userC);
userC.followAfter(userB);
userD.followAfter(userC);

userA.sendMessage();
userB.sendMessage();
userC.sendMessage();
userD.sendMessage();

console.log(" ");

userA.getMessage();
userB.getMessage();
userC.getMessage();
userD.getMessage();

console.log(userA);
