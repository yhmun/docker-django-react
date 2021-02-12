import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';

const examples = [
  {
    src_title: 'React and Django: Your guide to creating an app',
    src_url: 'https://blog.logrocket.com/creating-an-app-with-react-and-django',
    demo_title: 'Students',
    demo_url: '/examples/students',
  },
  {
    src_title: 'React: Creating and Hosting a Full-Stack Site',
    src_url: 'https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site',
    demo_title: 'Blog',
    demo_url: '/blog/articles',
  }
];

class ExampleList extends Component {
  render() {
    return (
      <ListGroup flush>
        {examples.map((example, key) => (
          <ListGroupItem key={key}>
            <ListGroupItemHeading>
              <a href={example.src_url}>
                {example.src_title}
              </a>
            </ListGroupItemHeading>
            <ListGroupItemText>
              <Link to={example.demo_url}>
                Demo: {example.demo_title}
              </Link>
            </ListGroupItemText>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default ExampleList;
