import styled from "styled-components"


const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
`

const Announcement = () => {
  return (
    <Container>
     Super Deal! free Shipping on oreder $100
    </Container>
  )
}

export default Announcement