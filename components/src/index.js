import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import ComponentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <ComponentDetail
          author="Sam"
          timeAgo="Today at 4:45 pm"
          image={faker.image.avatar()}
          comment="Nice one!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author="Jane"
          timeAgo="Yesterday at 4:45 pm"
          image={faker.image.avatar()}
          comment="I like it !"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author="Alex"
          timeAgo="Today at 8:48 pm"
          image={faker.image.avatar()}
          comment="Nice blok!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
