import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
const Message = forwardRef(({ userName, message }, ref) => {
  // checking whether the login username is equal to message typing userName or not .

  const isUser = userName === message.userName;

  return (
    <div ref={ref} className={`message ${isUser && `message__user`}`}>
      {/* message__user will be only addded to those user who have been login not to other user only user window only */}
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {!isUser && `${message.userName || "USER"}:`}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
