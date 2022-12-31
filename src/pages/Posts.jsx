import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const Posts = () => {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const res = await axios.get('https://codebuddy.review/posts');
    console.log(res?.data?.data?.posts);
    setPost(res?.data?.data?.posts);
  };

  useEffect(() => {
    getPost();
  }, []);

  const result = post.map(item => (
    <tr>
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.writeup}</td>
      <td>
        <img src={item.image} alt="user" width={100} height={100} />
      </td>
      <td>
        <img src={item.avatar} alt="avatar" width={100} height={100} />
      </td>
    </tr>
  ));
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Write Up</th>
          <th>Image</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>{result}</tbody>
    </Table>
  );
};

export default Posts;
