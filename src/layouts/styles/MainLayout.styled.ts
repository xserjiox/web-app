import styled from "styled-components";

export const MainLayout = styled.section`
    background: #0b0312;
    height: 100%;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    font-family: monospace;
    
    .header {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px -3px 20px 0 #99C3C1;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 20px; 
        background-color: #1d1427;
        margin-bottom: 50px;
        
        h3 {
            color: #b9eafd;
            font-weight: 800;
            font-size: 36px; 
        }
        
    }
    
    .mainContainer {
        height: 1000px;
    }

`