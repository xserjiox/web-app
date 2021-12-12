import styled from "styled-components";

export const SignOutStyles = styled.div`

    .signOutContainer {
       width: 100%;
       max-width: 600px;
       position: absolute;
       right: 0;
       padding: 10px 30px 10px 10px;
        
        .imgBtnWrapper {
            display: flex;
            justify-content: flex-end;
            
            .imageWrapper {
                margin-right: 10px;
                 
                .image {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
        
            .buttonLogout {
                font-weight: 600;
                font-size: 16px; 
            }
        }
        
        .nameWrapper {
            display: flex;
            justify-content: flex-end;
            padding-top: 5px;
            color: #b9eafd;
            font-size: 18px;
        }
        
        
    }

`;