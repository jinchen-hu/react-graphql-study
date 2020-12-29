import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 4:45PM"
          text="Nice Blog"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jimmy"
          time="Today at 7:35PM"
          text="I love it!"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Bob"
          time="Yesterday at 4:45PM"
          text="Come on"
          image={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
