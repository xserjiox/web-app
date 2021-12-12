import styled from "styled-components";

export const ChatStyles = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    box-shadow: 0px 0px 10px 0 #99C3C1, inset 0px 0px 10px 0 #99C3C1;
    background-color: #0b0312;
    height: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    
    .chatContainer {
        min-height: 800px;
       
        .chatHeader {
            position: fixed;
            top: 0;
            width: 100%;
            max-width: 1200px;
            height: 100px;
            background: #1d1427;
            border-radius: 5px;
            box-shadow: inset 0px 0px 10px 0 #99C3C1;
        }
        
        .messageContainer {
            margin: auto;
            width: 100%;
            max-width: 1000px;
            padding-top: 100px;
            
            .messageText {
                color: white;
            }
            
        }
    }
`;