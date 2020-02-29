import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import { Switch } from "react-router-dom";
import './App.css';

const MultiCarouselPage = () => {
  return (
    
    <MDBContainer className='container'>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem> 
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <div className='main-1'>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKcrNwh5ccMK7_xU-HarR3DWyO7QXxgTtmABlIqtmS9Xwh3RKN" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <Switch>
                    <MDBBtn to="/SignUp" color="primary">BOOK NOW</MDBBtn>
                    </Switch>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://www.airport-world.com/images/items/2016/05/parking.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">BOOK NOW</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2SIRflap5vXSKah0IiDHllMIKC4LxFj-3roQFFVE6437FKA11" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">BOOK NOW</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <div className='main-2'>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://www.japanesebuyers.com/jct/middle_image/1_15512378835c7602fb02583.jpeg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">BOOK NOW</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://pbs.twimg.com/media/Du7WwpaXcAAyV-4.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">BOOK NOW</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://netstorage-legit.akamaized.net/images/vllkyt5n5vkd3j5mt.jpg?imwidth=900" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">BOOK NOW</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <div className='main'>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://uberblogapi.10upcdn.com/wp-content/uploads/2019/08/UBERIM_2_RIDE_SA_7_1217-RT-Adobe-RGB-9-1024x818.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">BOOK NOW</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://www.bewiser.co.uk/sites/default/files/2019-08/pexels-photo-1842623.jpeg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">BOOK NOW</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://www.businesslist.com.ng/img/ng/z/1570789411-15-bits-logistics.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary" to="/SignUp">BOOK NOW</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </div>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default MultiCarouselPage;