import ContactForm from "./ContactForm";

import styled from 'styled-components';

import content from "../../static/json/contact"

const Contact = () => {
  return (
    <>
      <Container>
        <ContactForm info={content.info}></ContactForm>
      </Container>
    </>
  );
};

const Container = styled.div`
  @media ${(props) => props.theme.viewport.laptop} {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
`

export default Contact;
