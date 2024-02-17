import { Accordion, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Sidemenu = () => {
  return (
    <>
      <h2>Sidemenu</h2>
      <Container fluid className='openSans' >
        <Row className='sidemenu' >
          <Col md={2} className="">
            <Accordion className='px-3 m-1 mt-3'>
              <Link to='/dashboard' className='link black'>Dashboard</Link>
            </Accordion>
            <Accordion flush >
              <Accordion.Item eventKey="1" >
                <Accordion.Header>Students</Accordion.Header>
                <Accordion.Body>
                  <Link to="/dashboard/addStudent" className='link fs-7'>
                    Add Student
                  </Link>
                </Accordion.Body>
                <Accordion.Body>
                  <Link to="/dashboard/manage_student" className='link fs-7'>
                    Manage Student
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header className="bold-5">Class</Accordion.Header>
                <Accordion.Body>
                  <Link to="/dashboard/addClass" className='link fs-7'>
                    Add Class
                  </Link>
                </Accordion.Body>
                <Accordion.Body>
                  <Link to="/dashboard/manage_class" className='link fs-7'>
                    Manage Class
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Subject</Accordion.Header>
                <Accordion.Body>
                  <Link to="/dashboard/addSubject" className='link fs-7'>
                    Add Subject
                  </Link>
                </Accordion.Body>
                <Accordion.Body>
                  <Link to="/dashboard/manage_subject" className='link fs-7'>
                    Manage Subject
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Chapter</Accordion.Header>
                <Accordion.Body>
                  <Link to="/dashboard/addChapter" className='link fs-7'>
                    Add Chapter
                  </Link>
                </Accordion.Body>
                <Accordion.Body>
                  <Link to="/dashboard/manage_chapter" className='link fs-7'>
                    Manage Chapter
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>Question</Accordion.Header>
                <Accordion.Body>
                  <Link to="/dashboard/addQuestion" className='link fs-7'>
                    Add Question
                  </Link>
                </Accordion.Body>
                <Accordion.Body>
                  <Link to="/dashboard/createQuesSet" className='link fs-7'>
                    Add Question Set
                  </Link>
                </Accordion.Body>
                <Accordion.Body>
                  <Link to="/dashboard/manage_question" className='link fs-7'>
                    Manage Question
                  </Link>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item eventKey="6">
                <Accordion.Header>Banner</Accordion.Header>
                <Accordion.Body>
                  <Link to="/dashboard/banner" className='link fs-7'>
                    Banner
                  </Link>
                </Accordion.Body>
                <Accordion.Body>

                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
            <Accordion className='px-3 m-1'>
              <Link to="/notification" className='link black'>
                Notification
              </Link>
            </Accordion>
          </Col>
          <Col md={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  )
};
export default Sidemenu;