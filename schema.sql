DROP DATABASE IF EXISTS paisa;


CREATE DATABASE paisa;


USE paisa;
CREATE TABLE user(
  ID int NOT NULL AUTO_INCREMENT,
  userName varchar(16) NOT NULL,
  PRIMARY KEY(ID)
);


INSERT INTO user(userName) VALUES('rainbowBrony');
INSERT INTO user(userName) VALUES('theBlackLobo');
INSERT INTO user(userName) VALUES('emperorCamilo');
INSERT INTO user(userName) VALUES('codingNerd45');
INSERT INTO user(userName) VALUES('vatoLoco1');
INSERT INTO user(userName) VALUES('cleverUser2');


CREATE TABLE comments(
  commentID int NOT NULL AUTO_INCREMENT,
  comment varchar(255) NOT NULL,
  PRIMARY KEY(commentID),
  userID int,
  FOREIGN KEY (userID) REFERENCES user(ID)
);


INSERT INTO comments(comment, userID) VALUES('random questions',1);
INSERT INTO comments(comment, userID) VALUES('random questions',2);
INSERT INTO comments(comment, userID) VALUES('random questions',3);
INSERT INTO comments(comment, userID) VALUES('random questions',6);
INSERT INTO comments(comment, userID) VALUES('random questions',5);
INSERT INTO comments(comment, userID) VALUES('random questions',4);


CREATE TABLE reply(
  replyID int NOT NULL AUTO_INCREMENT,
  reply varchar(255)NOT NULL,
  PRIMARY KEY(replyID),
  userID int,
  FOREIGN KEY(userID) REFERENCES user(ID),
  commentID int,
  FOREIGN KEY(commentID) REFERENCES comments(commentID)
);


INSERT INTO reply(reply, userID, commentID) VALUES('random answer',1,1);
INSERT INTO reply(reply, userID, commentID) VALUES('random answer',2,2);
INSERT INTO reply(reply, userID, commentID) VALUES('random answer',3,3);
INSERT INTO reply(reply, userID, commentID) VALUES('random answer',6,4);
INSERT INTO reply(reply, userID, commentID) VALUES('random answer',5,5);
INSERT INTO reply(reply, userID, commentID) VALUES('random answer',4,6);


CREATE TABLE rating(
  ratingID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY(ratingID),
  replyID int,
  FOREIGN KEY(replyID) REFERENCES reply(replyID),
  commentID int,
  FOREIGN KEY(commentID) REFERENCES comments(commentID)
);


INSERT INTO rating(replyID, commentID) VALUES(1,1);
INSERT INTO rating(replyID, commentID) VALUES(2,2);
INSERT INTO rating(replyID, commentID) VALUES(3,3);
INSERT INTO rating(replyID, commentID) VALUES(6,6);
INSERT INTO rating(replyID, commentID) VALUES(5,5);
INSERT INTO rating(replyID, commentID) VALUES(4,4);
