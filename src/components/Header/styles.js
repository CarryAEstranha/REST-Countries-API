// Styled component import
import styled from "styled-components";

// Export the styles
export const Container = styled.header`
    /*HEADER CONTAINER*/
    background: var(--Elements);

    /*HEADER CONTENT*/
    #headerContent{
        display: flex;

        align-items: center;
        justify-content: space-between;

        margin: auto;
        padding: 0 2rem 0 2rem;

        max-width: 76rem;
        height: 4.75rem;

        /*TITLE LOGO*/
        #titleLogo{
            color: var(--Text);

            font-size: 1.25rem;
            font-weight: 800;

            float: left;
        }

        /*THEME BUTTON*/
        #themeButton{
            background: var(--Background);

            color: var(--Text);

            font-size: 0.75rem;
            font-weight: 600;

            border: none;
            border-radius: 8px;

            transition: 0.2s;
            
            width: 6.5rem;
            height: 2rem;

            /*HOVER*/
            &:hover{
                filter: opacity(0.6);
            }
        }
    }
`;