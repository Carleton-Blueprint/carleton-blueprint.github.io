import React from "react";

export default function ContactForm() {
  return <div>ContactForm</div>;
}

// import styled from 'styled-components';
// import { Button } from '../../components';
// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// interface ContactProps {
//     info: {
//         email: string;
//         social: {
//             icon: {
//                 src: string;
//                 alt: string;
//             };
//             link: string;
//         }[];
//     }
// }

// const ContactForm = (props: ContactProps) => {
//     const form = useRef<HTMLFormElement>(null);
//     const [showSent, setSent] = useState(false)

//     const sendEmail = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (form.current) {
//             emailjs.sendForm('service_xgab7p1', 'template_hkk20pi', form.current, 'YT9q6oUsSjEmsZASM').then((result) => {
//                 console.log(result.text);
//                 form.current?.reset();
//                 setSent(true);
//             }, (error) => {
//                 console.log(error.text);
//                 //to display error text on page
//             });
//         }
//     }

//     return <ContentDiv>
//         <FlexContainer>
//             <InputContainer ref={form} onSubmit={sendEmail}>
//                 <Title>Contact Us</Title>
//                 <InputField placeholder='Full Name' name='user_name' id='user_name' required></InputField>
//                 <InputField placeholder='Email' name='user_email' id='user_email' required></InputField>
//                 <InputField placeholder='Message' name='user_message' id='user_message' required></InputField>
//                 <StyledButton text='SEND'></StyledButton>
//                 {showSent ? <SentNotification>Message Sent ✅</SentNotification> : null}
//             </InputContainer>
//             <InfoContainer>
//                 <BoldText>Email</BoldText>
//                 <p>{props.info.email}</p>
//                 <BoldText>Social</BoldText>
//                 {props.info.social.map((social, index) => (
//                     <a href={social.link}><Image src={social.icon.src} alt={social.icon.alt}></Image></a>
//                 ))}
//                 <BoldText>Based In</BoldText>
//                 <p>Ottawa, Ontario</p>
//             </InfoContainer>
//         </FlexContainer>
//     </ContentDiv>;

// };
// // Styling
// const ContentDiv = styled.div`
//     padding: 25px 50px;
// `;

// const Title = styled.h1`
//   grid-area: Title;
//   font-family: ${(props) => props.theme.fonts.heading};
//   margin-bottom: 50px;
//   font-size: ${(props) => props.theme.fontSizes.larger}
// `;

// const FlexContainer = styled.div`
//     display:flex;
//     flex-direction: column;
//     @media ${(props) => props.theme.viewport.laptop} {
//         flex-direction: row;
//         gap: 10vw;
//         margin-right: 350px;
//     }
// `;

// const InputContainer = styled.form`
//     display: flex;
//     flex-direction: column;
//     margin: 35px 0px;
// `;

// const InfoContainer = styled.div`
//     @media ${(props) => props.theme.viewport.laptop} {
//         margin-top: 200px;

//     }
// `;

// const BoldText = styled.h3`
//     margin: 0px;
// `;

// const Image = styled.img`
//     width: 30px;
//     height: auto;
//     margin: 15px 10px 15px 0px;
//     filter: invert(27%) sepia(91%) saturate(2844%) hue-rotate(195deg) brightness(99%) contrast(103%);
// `;

// const InputField = styled.input`
//     @media ${(props) => props.theme.viewport.laptop} {
//         width: 300px;
//         transition: 0.2s ease-out;
//         &:focus {
//             outline: none;
//             width: 350px;
//             transition: 0.2s ease-in;
//         }

//     }
//     type: text;
//     border: none;
//     border-bottom: 3px solid black;
//     padding: 5px 0px;
//     margin: 10px 0px;
//     font-size: 18px;
//     max-width: 350px;
// `;

// const StyledButton = styled(Button)`
//     margin-top: 50px;
//     type: submit;
// `;

// const SentNotification = styled.div`
//     margin-top: 60px;
//     font-size: 24px;
//     color: white;
//     padding: 20px;
//     max-width: 207px;
//     border-radius: 5px;
//     background-color: ${(props) => props.theme.colors.primaryBlue};
// `

// export default ContactForm;
