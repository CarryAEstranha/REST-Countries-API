// Styled component import
import styled from "styled-components";

// Export the styles
export const Container = styled.main`
    /*MAIN TAG*/
    background: var(--Background);

    overflow: scroll;
    --ms-overflow-style: none;
    scrollbar-width: none;

    height: calc(100vh - 4.75rem);

    /*PREVENT SCROLLBAR WIDTH*/
    &::-webkit-scrollbar{
        display: none;
    }

    /*MAIN CONTENT*/
    #homeContent{
        margin: 0 auto 0 auto;
        padding: 3rem 2rem 0rem 2rem;

        max-width: 76rem;

        /*INPUT SECTION*/
        #inputSection{
            display: flex;

            align-items: center;
            justify-content: space-between;

            margin-bottom: 3rem;

            /*SEARCH COUNTRY FORM*/
            #searchForm{
                background: var(--Elements);

                display: flex;
                
                align-items: center;

                border-radius: 8px;

                height: 3.25rem;

                /*SUBMIT BUTTON*/
                button{
                    background: rgba(0, 0, 0, 0);

                    border: none;

                    padding-top: 0.15rem;

                    width: 4.5rem;
                    height: 3.25rem;

                    /*BUTTON ICON*/
                    img{
                        width: 1rem;
                        height: 1rem;
                    }
                }

                /*INPUT*/
                #inputSearch{
                    background: rgba(0, 0, 0, 0);

                    color: var(--Text);

                    font-size: 0.875rem;
                    font-weight: 400;

                    border: none;

                    margin: 0;
                    padding: 0 1rem 0 0;

                    outline: none;

                    width: 25rem;
                    height: 3.25rem;

                    /*PLACEHOLDER*/
                    &::placeholder{
                        color: var(--Text);

                        font-size: 0.875rem;
                        font-weight: 400;
                    }
                }
            }

            /*FILTER BY REGIONS DROPDOWN*/
            #regionSelectionContainer{
                background: var(--Elements);

                border-radius: 8px;

                width: 12.5rem;
                height: 3.25rem;

                /*PLACEHOLDER*/
                #placeholder{
                    display: flex;

                    align-items: center;
                    justify-content: space-between;

                    color: var(--Text);

                    font-size: 0.875rem;
                    font-weight: 400;

                    padding: 1.4rem;

                    width: 12.5rem;
                    height: 3.25rem;
                }

                /*MARGIN LINE*/
                #marginLine{
                    width: 12.5rem;
                    height: 0.2rem;
                }

                /*OPTIONS*/
                #options{
                    background: var(--Elements);

                    display: none;
                    flex-direction: column;

                    position: absolute;

                    padding: 0.4rem 0 0.4rem 0;

                    border-radius: 8px;

                    /*BUTTON*/
                    button{
                        background: rgba(0, 0, 0, 0);

                        display: flex;

                        align-items: center;
                        justify-content: flex-start;

                        color: var(--Text);

                        font-size: 0.75rem;
                        font-weight: 400;

                        border: none;

                        padding: 0.4rem 1.4rem 0.4rem 1.4rem;

                        transition: 0.2s;

                        width: 12.5rem;

                        /*HOVER EFFECT*/
                        &:hover{
                            background: rgba(0, 0, 0, 0.2);
                        }
                    }
                }

                /*EFEITO DE HOVER*/
                &:hover #options{
                    display: flex;
                }
            }
        }

        /*COUNTRY SECTION*/
        #countrySection{
            display: grid;
            grid-template-columns: auto auto auto auto;

            align-items: center;
            justify-content: center;

            /*COUNTRY CONTAINER*/
            .countryContainer{
                margin: 0 1rem 2rem 1rem;

                cursor: pointer;

                /*FLAG CONTAINER MASTER*/
                .flagContainerMaster{
                    overflow: hidden;

                    border-radius: 8px 8px 0 0;

                    /*FLAG CONTAINER*/
                    .flagContainer{
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;

                        border-radius: 8px 8px 0 0;

                        transition: 0.2s;

                        width: 16.5rem;
                        height: 10rem;
                    }
                }

                /*INFORMATION CONTAINER*/
                .countryInformation{
                    background: var(--Elements);

                    display: flex;
                    flex-direction: column;

                    justify-content: center;
                    align-items: flex-start;

                    line-height: 1.5;

                    border-radius: 0 0 8px 8px;

                    padding: 2rem;

                    width: 16.5rem;
                    height: 14rem;

                    /*COUNTRY TITLE*/
                    h2{
                        color: var(--Text);

                        font-size: 1.2rem;
                        font-weight: 800;

                        margin-bottom: 0.5rem;
                    }

                    /*STRONG TEXT*/
                    .strong{
                        color: var(--Text);

                        font-size: 0.85rem;
                        font-weight: 700;
                    }

                    /*NORMAL TEXT*/
                    .normal{
                        color: var(--Text);

                        font-size: 0.85rem;
                        font-weight: 300;
                    }
                }

                /*EFEITO DE HOVER*/
                &:hover .flagContainer{
                    transform: scale(1.2);
                }
            }
        }

        /*NAVBAR SECTION*/
        #nav1{
            display: none;
        }
        #nav2{
            display: none;
        }
        .navPage{
            align-items: center;
            justify-content: center;

            margin-bottom: 2rem;

            max-width: 70rem;

            /*BUTTON LINKS*/
            .pageIndexLink{
                background: var(--Elements);

                color: var(--Text);

                font-size: 0.85rem;
                font-weight: 300;

                text-decoration: none;

                border: none;
                border-radius: 8px;

                margin: 0 0.25rem 0 0.25rem;

                width: 2rem;
                height: 2rem;
            }
        }

        /*MEDIA FOR INPUT BAR*/
        @media(max-width: 40.95rem){
            /*INPUT SECTION*/
            #inputSection{
                flex-direction: column;

                align-items: flex-start;

                /*SEARCH COUNTRY FORM*/
                #searchForm{
                    margin-bottom: 1rem;
                }
            }
        }

        /*MEDIA FOR COUNTRY GRID*/
        @media(max-width: 76rem){
            /*COUNTRY SECTION*/
            #countrySection{
                grid-template-columns: auto auto auto;
            }
        }
        @media(max-width: 53.5rem){
            /*COUNTRY SECTION*/
            #countrySection{
                grid-template-columns: auto auto;
            }
        }
        @media(max-width: 34rem){
            /*INPUT SECTION*/
            #inputSection{
                /*SEARCH COUNTRY FORM*/
                #searchForm{
                    width: 100%;

                    /*INPUT*/
                    #inputSearch{
                        width: 100%;
                    }
                }
            }

            /*COUNTRY SECTION*/
            #countrySection{
                grid-template-columns: auto;
            }
        }
    }


    /*CIRCULAR PROGRESS*/
    #circularProgress{
        display: flex;

        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: calc(100vh - 14rem);
    }

    /*CLASS HIDDEN*/
    .hidden{
        position: absolute;
        top: 0;
        left: 0;

        overflow: hidden;

        width: 1px;
        height: 1px;
    }
`;