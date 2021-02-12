import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ArticleList from '../../components/blog/ArticleList';

class ArticleListPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Articles</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ArticleList/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArticleListPage;
