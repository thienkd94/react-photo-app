import React from 'react'
import Banner from '../../../../components/Banner/Banner'
import { Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import "./style.scss"
import { useSelector } from 'react-redux'
import PhotoList from '../../components/PhotoList'

const MainPage = () => {
  const photos = useSelector(state => state.photos);
  console.log(photos);

    return (
      <div>
        <Banner title="Your awesome photos " />

        <Container className="text-center">
          <Link to="photos/add">
            <Button color="success">Add new photo </Button>
          </Link>

          <PhotoList />
        </Container>
      </div>
    );
}

export default MainPage
