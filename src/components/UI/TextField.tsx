import React from "react";
import { Field } from "formik";
import styled from "@emotion/styled";
const CORRECT = "green";
const ERROR = "red";
const Input = styled(Field)({
  padding: "1vw",
  borderRadius: 22,
  border: "solid 1.8px rgba(255, 255, 255, 0.08)",
  outline: "none",
  width: "100%",
  height: "4vh",
  marginRight: 10,
    resize: 'none',
  backgroundColor:' rgba(217, 217, 217, 0.08)'
});
const Error = styled.p({
  color: "red",
  fontSize: 11,
    margin: 0,
  marginTop:'0.5vw',
  textAlign: "left",
});
const Container = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-beetwen",
});
interface TextFieldProps {
  name: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  error,
  touched,
  placeholder,
  type,
  textarea,
}) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Container>
          <Input
            as={textarea ? "textarea" : "input"}
            style={{
                borderColor: error && touched ? ERROR : touched && CORRECT,
                height:textarea?'10vw':'auto'
            }}
            name={name}
            placeholder={placeholder}
                      type={type}
                       rows={8}
          />
        </Container>
        {error && touched ? <Error>{error}</Error> : null}
      </div>
    </>
  );
};
export default TextField;
