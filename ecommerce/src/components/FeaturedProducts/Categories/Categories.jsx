import React from "react";
import {
  CategoriesDiv,
  Row,
  Col,
  ColLarge,
  ImageBox,
  Button,
} from "./StyledCategories";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
const Categories = () => {
  const catId = parseInt(useParams().id);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id]=${catId}`
  );
  return (
    <CategoriesDiv>
      <Col>
        <Row>
          <ImageBox>
            <img
              src="https://images.pexels.com/photos/5869610/pexels-photo-5869610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <Button>
              <Link className="link" to="/product/1">
                Sale
              </Link>
            </Button>
          </ImageBox>
        </Row>
        <Row>
          <ImageBox>
            <img
              src="https://images.pexels.com/photos/8485730/pexels-photo-8485730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <Button>
              <Link className="link" to="/products/1">
                Women
              </Link>
            </Button>
          </ImageBox>
        </Row>
      </Col>

      <Col>
        <Row>
          <ImageBox>
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Button>
              <Link className="link" to="/product/1">
                New Season
              </Link>
            </Button>
          </ImageBox>
        </Row>
      </Col>

      <ColLarge>
        <Row>
          <Col>
            <Row>
              <ImageBox>
                <img
                  src="https://www2.hm.com/content/dam/men_s05/january_2022/3135/3135-2x3-a-new-era-of-denim.jpg"
                  alt=""
                />
                <Button>
                  <Link className="link" to="/products/2">
                    Men
                  </Link>
                </Button>
              </ImageBox>
            </Row>
          </Col>

          <Col>
            <Row>
              <ImageBox>
                <img
                  src="https://images.pexels.com/photos/9595079/pexels-photo-9595079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <Button>
                  <Link className="link" to="/product/1">
                    Accessories
                  </Link>
                </Button>
              </ImageBox>
            </Row>
          </Col>
        </Row>
        <Row>
          <ImageBox>
            <img
              src="https://images.pexels.com/photos/4252965/pexels-photo-4252965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <Button>
              <Link className="link" to="/product/1">
                Shoes
              </Link>
            </Button>
          </ImageBox>
        </Row>
      </ColLarge>
    </CategoriesDiv>
  );
};

export default Categories;
